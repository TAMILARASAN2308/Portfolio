import '../styles/footer.css';

function Footer() {
  return (
    <>
    <section>
        <div className='py-4 bg-primary text-center text-white'>
        <p>&copy; {new Date().getFullYear()} Tamilarasan. All rights reserved.</p>
        </div>
    </section>
    </>
  )
}

export default Footer