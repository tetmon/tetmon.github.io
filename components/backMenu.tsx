const BackMenu = () => {
  return (
    <div className="m-auto max-w-2xl px-8 py-4 pb-0">
      <a href="/case-studies" className="flex">
        <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        <span className="pl-2">Back to Case Studies</span>
      </a>
    </div>
  );
}

export default BackMenu;