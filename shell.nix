let
  pkgs = import <nixpkgs> {};
  node_modules = pkgs.buildNpmPackage {
    name = "node_modules";
    src = builtins.filterSource
      (path: type: baseNameOf path == "package.json" || baseNameOf path == "package-lock.json")
      ./.;
    npmDepsHash = "sha256-JnVGPNdhztuVuKx+K0/N9SgxXPCGXnZPZsRNBY3mLls=";
    npmDepsFetcherVersion = 2;
    npmFlags = [
      "--legacy-peer-deps"
      "--also=dev"
    ];
    makeCacheWritable = true;
    dontNpmBuild = true;
  };
in pkgs.mkShell rec {
  buildInputs = with pkgs; [ nodejs pandoc ];
  shellHook = ''
    rm -f node_modules && ln -s ${node_modules}/lib/node_modules/tetmon.com/node_modules node_modules
  '';
}
