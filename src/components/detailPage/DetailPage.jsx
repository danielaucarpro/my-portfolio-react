import './DetailPage.css';

function DetailPage() {
    return (
        <>
            <div className="detail-container">
                <img className='detail-img'></img>
                <h1 className='detail-h1'>To do Task</h1>
                <div className='detail-link'>
                    <a href=''>Code</a>
                    <a href=''>Try it out</a>
                </div>
                <p className='detail-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem, delectus tenetur laborum sint praesentium fugit nam a neque totam cupiditate,
                    est veniam voluptas nisi soluta quaerat quisquam fugiat vero perspiciatis?
                </p>
                <h2 className='detail-h2'>Skills Used</h2>
                <ul className='detail-ul'>
                    <li>React</li>
                    <li>Local Storage</li>
                    <li>CSS, SASS</li>
                </ul>
            </div>
        </>
    );
}

export default DetailPage;
