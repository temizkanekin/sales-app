import React from 'react'
import SideBarItem from './SideBarItem'
import { connect } from 'react-redux'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faShoppingCart, faChevronRight, faUserCircle } from '@fortawesome/free-solid-svg-icons'


const backgroundColors = {
    darkblue: "#104E8B",
    blue: "#007FFF"
}

const SideBar: React.FC<any> = ({ salesState }) => {

    const { sideBarItems } = salesState
    return (
        <div className="sidebar-root">
            <div className="sidebar-section-user">
                <span onClick={() => Router.push('/')}>{salesState.userName}{" "} STORE</span>
                <FontAwesomeIcon size="lg" icon={faBars} />
            </div>
            <div className="sidebar-section-screen">
                <div>
                    <FontAwesomeIcon style={{ marginRight: ".5rem" }} icon={faShoppingCart} />
                    <span>Satış ekranı</span>
                </div>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
            <div className="sidebar-full-height">
                <div className="sidebar-items">
                    {
                        sideBarItems.map((sideBarItem: any) =>
                            <SideBarItem key={sideBarItem.id} sideBarItem={sideBarItem} />
                        )
                    }
                </div>
                <div className="sidebar-user-detail">
                    <FontAwesomeIcon size="lg" icon={faUserCircle} />
                    {salesState.userFullName}
                </div>
            </div>
            <style jsx>{`
                @media only screen and (max-width: 1024px){
                    .sidebar-root {
                        width:40% !important;
                    }
                }
                .sidebar-root {
                    width:20%;
                    height:100%;
                }
                .sidebar-items {
                    height:90%;
                    border:1px solid darkgray;
                    padding:1rem;
                    color:gray;
                }
                .sidebar-full-height {
                    height:calc(100% - 130px);
                    display:flex;
                    flex-direction:column;
                }
                .sidebar-section-user {
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    padding:.5rem;
                    padding-left:1rem;
                    height:50px;
                    background-color: ${ backgroundColors.darkblue};
                    color:white;
                    justify-content:space-between;
                }
                .sidebar-section-screen {
                    display:flex;
                    align-items:center;
                    font-weight:bold;
                    font-size:13px;
                    padding:.5rem;
                    padding-left:1rem;
                    height:50px;
                    background-color: ${ backgroundColors.blue};
                    justify-content:space-between;
                    color:white;
                }
                .sidebar-user-detail {
                    background-color:#ededed;
                    height:10%;
                    border-right:1px solid darkgray;
                    font-weight: bold;
                    font-size: 13px;
                    align-items: center;
                    display: flex;
                    justify-content: space-evenly;
                    color:darkblue;
                    text-align:center;
                }
            `}
            </style>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, undefined)(SideBar)