import type { User } from "../../../interfaces/global"

export default function UserComponent({ avatar_url, login}:User) {
  return(
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center py-8">
            <img className="w-24 h-24 mb-2 rounded-full shadow-lg" src={avatar_url} alt={login}/>
            <span className="text-sm text-gray-500 dark:text-gray-400">{login}</span>
            <div className="flex mt-2 md:mt-6">
                <a href="/#" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            </div>
        </div>
    </div>
  )
}