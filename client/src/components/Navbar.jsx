function Navbar() {
    const style={
        navbar:`flex items-center justify-center h-12 text-center bg-blue`,

        heading: `bg-blue-700 text-white p-2 rounded-xl shadow-xl cursor-pointer`,

    }
  return (
    <div className={style.navbar}>
        <h2 className={style.heading}>Chatters-space</h2>
    </div>
  )
}

export default Navbar