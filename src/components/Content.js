import React from 'react';
import { FaFileAlt, FaDownload } from 'react-icons/fa';

import Hero from './Hero'
import Education from './Education'

// right side column containing all sections
class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profile: {
                name: 'Shayla Luong',
                title: 'Software Developer',
                info: 'something something'
            },
            experience: [
                {
                    id: 0,
                    jobTitle: '',
                    description: '',
                    selected: false
                }
            ],
            education: [
                {
                    id: 0,
                    school: 'University of California, Irvine',
                    description: '',
                    selected: false
                }
            ]
        }
    }

    render() {
        return (
            <div className="content">
                <div className="about-section content-section-container">
                    <Hero name={this.state.profile.name} title={this.state.profile.title} info={this.state.profile.info}/>
                    <div>
                        <button className="button" data-toggle="modal" data-target="#myModal">
                            <FaFileAlt className="icon-size-adjust"/> View Resume
                        </button>
                        <span style={{margin: 5}}></span>
                        <a href="../assets/sluong-resume.pdf" download="resume.pdf">
                            <button className="button dark-gray">
                                <FaDownload className="icon-size-adjust"/> Download
                            </button>
                        </a>
                    </div>
                </div>

                <div className="skills-section content-section-container">
                    <h2 className="section-title font-weight-bold">Skills Overview</h2>
                </div>

                <Education/>

                <div className="experience-section content-section-container">
                    <h2 className="section-title font-weight-bold">Experience</h2>
                </div>

                <div className="projects-section content-section-container">
                    <h2 className="section-title font-weight-bold">Projects</h2>
                </div>
            </div>
        );
    }
}

export default Content;