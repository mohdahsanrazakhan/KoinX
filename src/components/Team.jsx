import johnProfile from '/assets/images/person-1.jpg'
import smithProfile from '/assets/images/person-2.jpg'
import elinaProfile from '/assets/images/person-3.jpg'

const Team = () => {
  return (
    <>
      <div className="bg-[#ffffff] p-5 my-5 rounded-xl max-w-screen-lg flex flex-col gap-5">
        <h2 className="text-xl"><strong>Team</strong></h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque nobis molestias laboriosam nulla quos quia mollitia, itaque nihil eum exercitationem illo ipsa facilis ex delectus dignissimos illum? Ipsam totam, consequuntur provident?</p>
        <div className='flex flex-col md:flex-row justify-center items-center bg-[#e8f4fd] rounded-xl p-5 gap-7'>
          <div className='md:w-1/2 w-auto text-center'>
            <img className='rounded-md mb-2' src={johnProfile} alt="john-profile" />
            <p className='font-semibold'>John Smith</p>
            <small>Designation here</small>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quisquam impedit veritatis voluptas cumque, quibusdam, sint iure at tempora atque dolore suscipit! Saepe sint, eligendi, vitae mollitia est quam ad consectetur, sit magni molestias aut itaque modi sed temporibus exercitationem eveniet harum totam dicta blanditiis voluptatibus odio ex similique eum!</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center bg-[#e8f4fd] rounded-xl p-5 gap-7'>
          <div className='md:w-1/2 w-auto text-center'>
            <img className='rounded-md mb-2' src={elinaProfile} alt="elina-profile" />
            <p className='font-semibold'>Elina Williams</p>
            <small>Designation here</small>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quisquam impedit veritatis voluptas cumque, quibusdam, sint iure at tempora atque dolore suscipit! Saepe sint, eligendi, vitae mollitia est quam ad consectetur, sit magni molestias aut itaque modi sed temporibus exercitationem eveniet harum totam dicta blanditiis voluptatibus odio ex similique eum!</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center bg-[#e8f4fd] rounded-xl p-5 gap-7'>
          <div className='md:w-1/2 w-auto text-center'>
            <img className='rounded-md mb-2' src={smithProfile} alt="smith-profile" />
            <p className='font-semibold'>John Smith</p>
            <small>Designation here</small>
          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quisquam impedit veritatis voluptas cumque, quibusdam, sint iure at tempora atque dolore suscipit! Saepe sint, eligendi, vitae mollitia est quam ad consectetur, sit magni molestias aut itaque modi sed temporibus exercitationem eveniet harum totam dicta blanditiis voluptatibus odio ex similique eum!</p>
        </div>
      </div>
    </>
  )
}

export default Team