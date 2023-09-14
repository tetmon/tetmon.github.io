let
  pkgs = import (fetchGit {
    url = https://github.com/NixOS/nixpkgs.git;
    ref = "nixos-21.05";
  }) { };
  npmlock2nix = import (fetchGit {
    url = https://github.com/tweag/npmlock2nix.git;
    rev = "50479248c913ac9816e2b64a2aae792caf4f58d2";
  }) { inherit pkgs; };
  nm = npmlock2nix.node_modules {
    packageJson = ./package.json;
    packageLockJson = ./package-lock.json;
    src = builtins.filterSource
      (path: type: baseNameOf path == "package.json" || baseNameOf path == "package-lock.json")
      ./.;
    preBuild = ''
      rm -f node_modules
    '';
  };
in pkgs.stdenv.mkDerivation rec {
  name = "www.tetmon.com";
  src = builtins.filterSource
    (path: type: baseNameOf path != "node_modules")
    ./.;
  configurePhase = ''
    rm -f node_modules
    ln -s ${nm}/node_modules node_modules
    chmod -R u+rw node_modules
  '';
  buildInputs = with pkgs; [ jekyll nm ];
  shellHook = ''
    ${configurePhase}
  '';
}
