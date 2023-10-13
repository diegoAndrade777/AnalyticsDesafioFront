const Header: React.FC = () => {
  return (
    <>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <div className="justify-between flex flex-row">
          <div>
            <img
              width={32}
              height={32}
              src="https://softexpert.co.ao/imgs/se-icon.ico"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold px-2">
              Soft-expert - Frontend Test
            </h1>
          </div>
        </div>

        <div className="flex items-center flex-col gap-1  mr-4">
          <img
            className="rounded-full"
            width={40}
            height={40}
            src="https://avatars.githubusercontent.com/u/45301572?v=4"
          />
          <span className="text-xs">
            <a
              href="https://www.linkedin.com/in/diego-r-andrade/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diego
            </a>
          </span>
        </div>
      </div>
    </>
  )
}

export default Header
