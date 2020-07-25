import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/actions'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

type ClassProps = {
    sideBarItem: any,
    salesState: any,
}

const SideBarItem: React.FC<ClassProps & any> = ({ setActiveSideBarItemId, sideBarItem, salesState }) => {
    const [isExpanded, setIsExpanded] = React.useState(true)
    const isOpen = salesState.sideBarItems.filter((sideBarItem: any) => sideBarItem.id === salesState.activeSideBarItemId)[0]
    const router = useRouter()

    React.useEffect(() => {
        if (isOpen)
            setIsExpanded(true)
    }, [isOpen])

    const handleSideBarItemClick = () => {
        setActiveSideBarItemId(sideBarItem.id)
        setIsExpanded(!isExpanded)
    }
    return (
        <div>
            <h4 style={{ display: "flex", justifyContent: "space-between" }} className={`${isExpanded && isOpen && isOpen.id === sideBarItem.id && 'active'}`}
                onClick={handleSideBarItemClick}>
                <div>
                    <FontAwesomeIcon style={{ marginRight: ".5rem" }} icon={sideBarItem.icon} />
                    {sideBarItem.sideBarItemTitle}
                </div>
                {
                    sideBarItem.sideBarItemChildren.length > 0 &&
                        isExpanded && isOpen && isOpen.id === sideBarItem.id ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />
                }
            </h4>
            {
                isExpanded && isOpen && isOpen.id === sideBarItem.id && sideBarItem.sideBarItemChildren.map((sideBarItemChild: any, index: number) =>
                    <h5 onClick={() => Router.push(sideBarItemChild.path)} key={index}
                        className={`${router.pathname.includes(sideBarItemChild.path) ? 'sidebar-item-child-active' : 'sidebar-item-child'}`}>{sideBarItemChild.name}</h5>
                )
            }
            <style jsx>{`
            .active {
                color:#007FFF;
            }
            .sidebar-item-child-active {
                cursor:pointer;
                color:darkblue;
                font-size:14px;
            }
            .sidebar-item-child {
                cursor:pointer;
                font-size:14px;
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

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        setActiveSideBarItemId: Actions.setActiveSideBarItemId
    }, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connect<{}, {}, PropsFromRedux>(mapStateToProps, mapDispatchToProps)(SideBarItem)