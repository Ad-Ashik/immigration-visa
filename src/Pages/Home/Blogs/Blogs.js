import React from 'react';

const Blogs = () => {
    return (

        <div className='w-50 my-5 mx-auto'>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Q1.authentication vs authorization?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Authentication Check the identity to access the system. Authorization check the proson and permission to resources. Authentication verifying user credentials. Authorization validating the user permisson. Authentication performed at the very first step. Authorization is usually perfromed after authentication.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Q2.Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h6>Firebase using most of the Authentication backend services. and authenticate user to use my app.</h6> <strong>Firebase open source Alternatives are</strong>
                            <ul>
                                <li>Parse</li>
                                <li>Back4App</li>
                                <li>AWS Amplify</li>
                                <li>Kuzzle</li>
                                <li>Couchbase</li>
                                <li>LoopBack</li>
                                <li>SashiDo</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Q3. What other services does firebase provide other than authentication?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h6>Other services does firebase provide</h6>
                            <ul>
                                <li>Realtime Database</li>
                                <li>Emulator Suite</li>
                                <li>Firestore</li>
                                <li>Hosting</li>
                                <li>Cloud Functions</li>
                                <li>Security Rules</li>
                                <li>Analytics</li>
                                <li>Remote Config</li>
                                <li>A/B Testing</li>
                                <li>Cloud Messaging</li>
                                <li>Dynamic Links</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Blogs;