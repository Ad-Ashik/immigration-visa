import React from 'react';
import me from '../../../images/me/Ashik.jpg'

const About = () => {
    return (
        <div className="card mb-3 container my-5" style={{ width: '75%' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={me} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">My Goal</h5>
                        <p className="card-text">আমি গত (চার-পাচ) বছর ধরে একজন web-developer হতে চাইছিলাম। মধ্যবিত্ত জীবনটাকে web-developer এর আদলে সুন্দর করতে চেয়েছি। অনেক গুলো স্বপ্ন ঘিরে রয়েছে এই developing নিয়ে। তার একটাও পূরণ হয়নি এখনো। তবে হ্যা, আমি current year এর মধ্যে কোন একটা web-developer company তে job করতে চাই। এটাই এখন আমার লক্ষ্য। </p>
                        <p className="card-text"><small className="text-muted">আমার জীবনের কথাগুলো না হয় আর একদিন বলা যাবে....</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;