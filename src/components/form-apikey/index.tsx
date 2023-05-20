import { AppActions, useAppContext } from "@/context/Appcontext";
import { FaPaste } from 'react-icons/fa';
export const FormApiKey = () => {
  const {dispatch} = useAppContext();
  
  return (
    <form>   
    <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
        <FaPaste width={40} height={40} fill="black"/>
        </div>
        <input type="password" id="default-search" className="block w-full p-4 pl-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none" placeholder="ApiKey" required onChange={(e) => dispatch({
          type: AppActions.setApiKey,
          payload: e.target.value
        })}/>
    </div>
    <button type="submit" className="h-[45px] w-32 text-gray-900 relative left-60 top-[-50px] ml-16 bg-stone-200 focus:ring-4 focus:ring-blue-300 rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm border">Login</button>
</form>
  );
};
