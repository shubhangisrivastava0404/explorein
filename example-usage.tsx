import { FiCalendar, FiClock, FiUser } from "react-icons/fi"

const IconExample = () => {
  return (
    <div className="flex gap-4 p-4">
      <div className="flex items-center">
        <FiCalendar className="mr-2" />
        <span>Calendar</span>
      </div>
      <div className="flex items-center">
        <FiClock className="mr-2" />
        <span>Clock</span>
      </div>
      <div className="flex items-center">
        <FiUser className="mr-2" />
        <span>User</span>
      </div>
    </div>
  )
}

export default IconExample
