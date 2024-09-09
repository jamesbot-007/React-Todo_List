import React from 'react'

export const About = () => {
  return (
    <div className='container '>
      <h1 className='text-center'>

        About
      </h1>
      <hr />
      <h5>
        Welcome to our To-Do List App, a simple yet powerful tool designed to help you manage your tasks efficiently!
      </h5>

      <h4 className=' mt-4'>

        Key Features:
      </h4>
      <ul>

        <li>Add Tasks: Easily add new tasks to keep track of what needs to be done.</li>
        <li>Edit Tasks: Update your tasks as needed, whether to adjust deadlines or revise details.</li>
        <li>Mark as Completed: Keep yourself organized by marking tasks as complete with a single click.</li>
        <li>Delete Tasks: Remove tasks that are no longer relevant with a simple delete button.</li>
        <li>Filter Options: View tasks by their completion status, showing only pending or completed tasks.</li>
      </ul>
      <h4 >
        Why Use This App?

      </h4>
      <p>This To-Do List app was built with simplicity and functionality in mind, perfect for anyone looking to organize daily tasks. Whether you're managing work projects, personal goals, or daily errands, this app will help you stay on top of everything!</p>

      <h4>

        Technologies Used:
      </h4>
      <p>

        This app was created using modern web technologies, including:
      </p>
      <ul>
        <li>

          React: For building a responsive, dynamic user interface.
        </li>
        <li>

          PropTypes: To ensure the integrity of data passed between components.
        </li>
        <li>

          CSS: To style the application and make it visually appealing.
        </li>
      </ul>

    </div>
  )
}
