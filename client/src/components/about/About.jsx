
//import { Box, styled, Typography, Link } from '@mui/material';
//import { GitHub, Instagram, Email } from '@mui/icons-material';
import "./Style.css"

// const Banner = styled(Box)`
//     background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px bottom 0px;
//     background-size: cover;
// `;

// const Wrapper = styled(Box)`
//     padding: 20px;
//     & > h3, & > h5 {
//         margin-top: 50px;
//     }
// `;

// const Text = styled(Typography)`
//     color: #878787;
// `;

const About = () => {
    let message = `Our Team provide best platform for students to create their space on this Educational blogging Website.An educational blogging website can be used for a variety of purposes, such as sharing educational resources, facilitating discussions, and engaging students. Here are some potential components of a report for an educational blogging system. Here students can read, create, update, delete and also comment on anothers blogs which are categorised. Students can read specific blogs according to their interest.`;
    return (
        // <Box>
        //     <Banner/>
        //     <Wrapper>
        //         <Typography variant="h3">Start Blogging</Typography> 
        //         <Text variant="h5">We are Software Engineers based in India.We work in Team and
        //             We have built websites<br />
        //             If you are interested, you can view some of our favorite projects here
        //             <Box component="span" style={{ marginLeft: 5 }}>
        //                 <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
        //             </Box>
        //         </Text>
        //         <Text variant="h5">
        //             Need something built or simply want to have chat? Reach out to us on
        //             <Box component="span" style={{ marginLeft: 5 }}>
        //                 <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
        //                     <Instagram />
        //                 </Link>
        //             </Box>  
        //                 or send me an Email 
        //                 <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
        //                     <Email />
        //                 </Link>.
        //         </Text>
                
                <section class="section-white">
                 <div class="container">
         
                <div class="row">
               
                            <div class="col-md-12 text-center">
        
                                  <h2 class="section-title">The Team Behind </h2>
        
                                  <p class="section-subtitle">{message}</p>
                                  
                            </div> 
                     
                    <div class="col-sm-6 col-md-4">
        
                          <div class="team-item">
                          
                              <img src="https://i.postimg.cc/VvY7ydcK/shoeb1.jpg" class="team-img" alt="pic" />                   
                              <h3>SHOEB ANSARI</h3>            
                              <div class="team-info"><p>Frontend Developer</p></div>
                              <p>Hii, I am shoeb Ansari final year student of B.Tech specialization in Computer Science and Engineering andI am Frontend Developer of this Blogging Project. I explored various framework for frontend development during my 4 year BTech graduation.</p>
                          
                              <ul class="team-icon">
                              
                                  <li><a href="https://www.linkedin.com/in/shoeb-ansari-034928183" class="twitter" target="_blank">
                                    <i class="fa fa-linkedin"></i>
                                </a></li>
                                  <li><a href="https://github.com/mdshoeb2050" class="dribble" target="_blank">
                                  <i class="fa fa-github"></i>
                                </a></li>
                                  
                              </ul>
                              
                          
                        </div>
                    </div> 
                      
                    <div class="col-sm-6 col-md-4">
        
                          <div class="team-item">
                          
                              <img src="https://i.postimg.cc/FF6m4LRf/profilee.png" class="team-img" alt="pic" />
                             
                              <h3>ANCHAL SINGH</h3>
                              
                              <div class="team-info"><p>MERN Stack Developer</p></div>
        
                              <p>Hii, I am Anchal Singh final year student of B.Tech specialisation in Computer Science and Engineering.I have explored a lot of things in the past 4 years, and I finally realized that the domain I'm interested in is website designing. So, currently, I'm focusing on MERN Stack Development. </p>
                          
                              <ul class="team-icon">
                              
                                  <li><a href="https://www.linkedin.com/in/anchal-singh-a38222237" class="twitter" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  
                                  <li><a href="https://github.com/AnchalSingh11" class="dribble" target="_blank">
                                  <i class="fa fa-github"></i>
                                </a></li>
                                  
                              </ul>
                              
                          </div>
        
                    </div> 
                    <div class="col-sm-6 col-md-4">
        
                          <div class="team-item">
                          
                              <img src="https://i.postimg.cc/wB2Lgs83/shruti.jpg" class="team-img" alt="pic" />                   
                              <h3>SHRUTI GUPTA</h3>            
                              <div class="team-info"><p>Frontend Developer & Content Writer</p></div>
                              <p>Hii, I am Shruti Maurya responsible and committed final year engineering student with excellent problem solving skills and ability to perform well in team and I am also Content Writer.</p>
                          
                              <ul class="team-icon">
                              
                              <li><a href="https://www.linkedin.com/in/anchal-singh-a38222237" class="twitter" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  
                                  <li><a href="https://github.com/AnchalSingh11" class="dribble" target="_blank">
                                  <i class="fa fa-github"></i>
                                </a></li>
                                  
                              </ul>
                              
                          
                        </div>
                    </div> 
                    <div class="col-sm-6 col-md-4">
        
                          <div class="team-item">
                          
                              <img src="https://i.postimg.cc/4yN0xD3c/himanshu1.jpg" class="team-img" alt="pic" />                   
                              <h3>Himanshu Tiwari</h3>            
                              <div class="team-info"><p>UI Developer and Content writer</p></div>
                              <p>Hii, I am Final year student of BTech in Computer Science and Engineering from Dr. A.P.J. Abdul Kalam Technical University, Lucknow. Currently I'm good at problem solving and logic building. I am interested in Software Development Engineering.I love to learn new things</p>
                          
                              <ul class="team-icon">
                              <li><a href="https://www.linkedin.com/in/anchal-singh-a38222237" class="twitter" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  
                                  <li><a href="https://github.com/AnchalSingh11" class="dribble" target="_blank">
                                  <i class="fa fa-github"></i>
                                </a></li>

                              </ul>
                              
                          
                        </div>
                    </div> 
                      
                    <div class="col-sm-6 col-md-4">
        
                          <div class="team-item">
                          
                              <img src="https://i.postimg.cc/YCWJFSDt/image.png" class="team-img" alt="pic" />
                             
                              <h3>Rati Singh</h3>
                              
                              <div class="team-info"><p>Frontend Developer & Content Writer</p></div>
        
                              <p>I am a passionate and Ambitious student of Kashi institute of technology, final year student of B.Tech(Computer science and engineering).I would describe myself as a smart-working with dedication, honesty, high work ethics and morals which would make me an asset to any company that hires me.</p>
                          
                              <ul class="team-icon">
                              
                              <li><a href="https://www.linkedin.com/in/anchal-singh-a38222237" class="twitter" target="_blank"><i class="fa fa-linkedin"></i></a></li>
                                  
                                  <li><a href="https://github.com/AnchalSingh11" class="dribble" target="_blank">
                                  <i class="fa fa-github"></i>
                                </a></li>
                                  
                              </ul>
                              
                          </div>
        
                    </div> 
                
                </div> 
            
            </div> 
        </section>
        //     </Wrapper>
        // </Box>
        
    )
}

export default About;