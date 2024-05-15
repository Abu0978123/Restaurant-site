 
const Home = () => {
  return (
    
    <section id="home" className="relative">
    <div className="blob1"></div>
    <div className="blob2"></div>
    <div className="container py-20 m-auto">
        <div className="flex flex-col items-center z-20 md:flex-row">
            <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                <h1 className="title mb-4">Awesome App for Your Financial.</h1>
                <p className="leading-relaxed mb-10">This should be used to tell a story and let your users know a little more about app and it’s use, How can benefit them.</p>
                <button className="btn">Download app</button>
            </div>
            <div className="md:w-1/2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfaJi_pOyJlnYkplmmQD3kJW7GCWyM6dGhWl2GOsic1Q&s" alt=""/>
            </div>
        </div>
    </div>
</section>
  )
}

export default Home