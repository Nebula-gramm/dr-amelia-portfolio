

const PostCard = () => {
    return (
        <div className='font-primary my-4 md:flex'>
            <div className='w-full md:w-1/4 h-[200px] rounded-t-xl md:rounded-none order-2'><img className='w-full h-full object-cover rounded-t-xl md:rounded-r-xl md:rounded-t-none' src="https://images.pexels.com/photos/5996762/pexels-photo-5996762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
            <div className='md:w-3/4 px-4 py-2 bg-[#F1EFEC] order-1 md:rounded-l-xl'>
                <h1 className='text-xl font-bold md:text-3xl md:my-2'>Understanding of the importance of Regular Check-ups</h1>
                <p className="md:text-xl md:my-2">Regular Check Ups Are crucial maintaining over all health and detecting issues early. Learn more about the benefits of Regular checkups.</p>
                <button className="bg-[#E9DFC3] px-4 py-1 rounded-[5px] mt-2 cursor-pointer">Read More</button>
            </div>
        </div>
    );
};

export default PostCard;