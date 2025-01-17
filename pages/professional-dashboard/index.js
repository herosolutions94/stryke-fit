import React, { useState } from "react";
import Link from "next/link";
import LayoutDashboard from '@/components/components/layoutDashbord';


export default function Dashboard() {
  
  return (
    <>
      <main>
         <section className="dashboard">
            <div className="contain">
              <div className="sec_heading">
                <h3>Welcome Back <span className="color">Arlie Anderson.</span></h3>
              </div>
              <div className="dash_tile_main custom_blk">
                <div className="col">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/envelope_color.svg" alt="Total Messages Received" />
                    </div>
                    <div className="cntnt">
                      <p>Total Messages Received</p>
                      <h3>73</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/ThumbsUp.svg" alt="Total Impressions on Profile" />
                    </div>
                    <div className="cntnt">
                      <p>Total Impressions on Profile</p>
                      <h3>205</h3>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="inner">
                    <div className="icon">
                      <img src="/images/file.svg" alt="Total Contracts Converged" />
                    </div>
                    <div className="cntnt">
                      <p>Total Contracts Converged</p>
                      <h3>53</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="br"></div>
              <div className="sec_heading">
                <h4>Contracts Converged</h4>
              </div>
              {/* ====start loop====== */}
              <div className="contract_list custom_blk">
                  <div className="col">
                    <div className="user_info">
                      <div className="dp_icon">
                        <img src="/images/testi6.png" alt=""/>
                      </div>
                      <div className="cntnt">
                        <h5>Aleena Gilbert</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Date</small></p>
                      <p><strong>Feb 26,2023</strong></p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Service</small></p>
                      <p><strong>Pipe Installation and Repair</strong></p>
                    </div>
                  </div>
                  <div className="col col_l">
                    <div className="inner">
                      <p><small>Address</small></p>
                      <p><strong>123 Main Street, Anytown, USA, 12345</strong></p>
                    </div>
                  </div>
                  
              </div>
              {/* =========end loop========== */}
              <div className="contract_list custom_blk">
                  <div className="col">
                    <div className="user_info">
                      <div className="dp_icon">
                        <img src="/images/mini_user.svg" alt=""/>
                      </div>
                      <div className="cntnt">
                        <h5>Aleena Gilbert</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Date</small></p>
                      <p><strong>Feb 26,2023</strong></p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Service</small></p>
                      <p><strong>Water Filtration and Treatment</strong></p>
                    </div>
                  </div>
                  <div className="col col_l">
                    <div className="inner">
                      <p><small>Address</small></p>
                      <p><strong>123 Main Street, Anytown, USA, 12345</strong></p>
                    </div>
                  </div>
                  
              </div>
              <div className="contract_list custom_blk">
                  <div className="col">
                    <div className="user_info">
                      <div className="dp_icon">
                        <img src="/images/testi1.png" alt=""/>
                      </div>
                      <div className="cntnt">
                        <h5>Stefen Chris</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Date</small></p>
                      <p><strong>Feb 26,2023</strong></p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <p><small>Service</small></p>
                      <p><strong>Remodeling and Renovation</strong></p>
                    </div>
                  </div>
                  <div className="col col_l">
                    <div className="inner">
                      <p><small>Address</small></p>
                      <p><strong>123 Main Street, Anytown, USA, 12345</strong></p>
                    </div>
                  </div>
                  
              </div>
            </div>
         </section>
      </main>
      
    </>
  );
}
Dashboard.getLayout = function(page) {
    return <LayoutDashboard>{page}</LayoutDashboard>;
};
