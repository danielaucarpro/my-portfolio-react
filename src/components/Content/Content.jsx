import './Content.css';

const Content = () => {
    return (
        <>
            <main>
                <div className='content-container'>
                    <h1 className='content-h1'>Hi! I'm Daniel</h1>
                    <p className='content-introText'>
                        Former Graphic designer turned UI/UX designer,
                        with 2+ years experience in graphic designing, UI/UX designing, and, most recently,
                        front end web development. Working in multiple areas in the past years made me a complete
                        UI/UX designer who can work from end-to-end in a project.
                    </p>
                </div>
                <section className='content-workContainer'>
                    <a className='content-projectLink'>Project</a>
                    <a className='content-projectLink'>Project</a>
                    <a className='content-projectLink'>Project</a>
                    <a className='content-projectLink'>Project</a>
                </section>
            </main>
        </>
    );
}

export default Content;