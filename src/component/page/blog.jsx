import React from 'react';
import { Link } from 'react-router-dom'; 
import person1 from '../../img/person1.jpg';
import person2 from '../../img/person1.jpg';
import person3 from '../../img/person1.jpg';

export const Blog = () => {

    return (
        <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
                <div className="row animate-box row-pb-md" data-animate-effect="fadeInUp">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <span>Thoughts &amp; Ideas</span>
                        <h2>Our Blog</h2>
                        <p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 12th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p className="author"><img src={person1} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 23rd</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p className="author"><img src={person2} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 24th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p className="author"><img src={person3} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 12th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p className="author"><img src={person1} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 23rd</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p className="author"><img src={person2} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 24th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p className="author"><img src={person3} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>


                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 12th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                            <p className="author"><img src={person1} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 23rd</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p className="author"><img src={person2} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 animate-box" data-animate-effect="fadeInUp">
                        <div className="fh5co-post">
                            <span className="fh5co-date">Sep. 24th</span>
                            <h3><Link to="#">Web Design for the Future</Link></h3>
                            <p>Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.</p>
                        <p className="author"><img src={person2} alt="Free HTML5 Bootstrap Template by FreeHTML5.co" /> <cite> Mike Adam</cite></p>
                        </div>
                    </div>

                    <div className="col-md-12 text-center">
                        <nav aria-label="Page navigation">
                        <ul className="pagination">
                            <li>
                            <Link to="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </Link>
                            </li>
                            <li className="active"><Link to="#">1</Link></li>
                            <li><Link to="#">2</Link></li>
                            <li><Link to="#">3</Link></li>
                            <li><Link to="#">4</Link></li>
                            <li><Link to="#">5</Link></li>
                            <li>
                            <Link to="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </Link>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}