import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
    const error = useRouteError()
  return (
    <div className="flex items-center justify-center h-screen">
        <h4 className="font-bold text-4xl">
            {error.message}
        </h4>

    </div>
  )
}
export default ErrorElement