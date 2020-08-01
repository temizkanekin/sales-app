import React from 'react'
import SideBar from '../../components/SideBar'
import { GetStaticProps, GetStaticPaths } from 'next'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/actions'
import { initialOrderData } from '../../utils/initial-app-data'
import { Order } from '../../interfaces'
import Router from 'next/router'
import { Button } from '../../components/Button'
import SnackBar from '../../components/SnackBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


type Props = {
    item: Order,
    salesState: any,
}

const SalesDetail: React.FC<Props & any> = ({ addOrderHistoryComment, item, salesState }) => {
    const [orderHistoryComment, setOrderHistoryComment] = React.useState("")
    const ref: any = React.useRef();

    const handleAddHistoryComment = (orderId: number) => () => {
        addOrderHistoryComment(orderId, orderHistoryComment)
        ref.current.fireSnackBar({
            type: "success",
            message: "Sipariş Tarihçesi Yorumu Başarıyla Eklendi"
        })
        setOrderHistoryComment("")
    }
    const activeItem: Order = salesState.orderDatas.filter((orderData: Order) => orderData.orderDetails.orderId === item.orderDetails.orderId)[0]
    return (
        <React.Fragment>
            <SnackBar ref={ref} />
            <SideBar />
            {activeItem && <div className="salesdetail-root">
                <div className="salesdetail-toolbar">
                    <div onClick={() => Router.back()} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <FontAwesomeIcon style={{ marginRight: ".5rem" }} icon={faChevronLeft} />
                        <span>Geri</span>
                    </div>
                </div>
                <div className="salesdetail-content">
                    <div className="salesdetail-content-left">
                        <div className="salesdetail-content-left-upper">
                            <Button large buttonType={activeItem.status.type}>{activeItem.status.label}</Button>
                            <div className="salesdetail-content-left-upper-card">
                                <div style={{ width: "25%", display: "flex", height: "100%", alignItems: "center" }}>
                                    <div className="salesdetail-content-left-upper-card-product-count">{activeItem.products.productCount}</div>
                                    <span style={{ width: "75%", marginLeft: "1rem" }}>{activeItem.products.productName}</span>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "1rem" }}>
                                    <span>{activeItem.products.productCount}x{" "}{salesState.currencySymbol}{activeItem.price}</span>
                                    <span style={{ alignSelf: "center" }}>{salesState.currencySymbol}{" "}{activeItem.products.productCount * activeItem.price}</span>
                                </div>
                            </div>
                            <div style={{ width: "100%", borderBottom: "1px solid #ededed", marginBottom: "1rem" }}>

                            </div>
                            <div className="salesdetail-content-left-upper-shipping">
                                <div style={{ width: "40%", fontSize: "13px" }}>
                                    <span>{activeItem.orderDetails.orderShippingCompany}-{activeItem.orderDetails.orderPaymentType}</span>
                                </div>
                                <div className="salesdetail-content-left-upper-shipping-print-buttons">
                                    <Button medium style={{ backgroundColor: "white", color: "#007FFF", border: "1px solid #007FFF", borderRadius: "5px" }}>Fatura Yazdır</Button>
                                    <Button medium style={{ backgroundColor: "white", color: "#007FFF", border: "1px solid #007FFF", borderRadius: "5px" }}>Etiket Yazdır</Button>
                                    <Button medium >Kargola</Button>
                                </div>
                            </div>
                        </div>
                        <div className="salesdetail-content-left-lower">
                            <div className="salesdetail-content-left-lower-order-history-title">
                                Sipariş Tarihçesi
                            </div>
                            <div className="salesdetail-content-left-lower-order-history">
                                <div className="salesdetail-content-left-lower-order-history-input-area">
                                    <input
                                        style={{ width: "80%", padding: ".5rem" }}
                                        type="text"
                                        value={orderHistoryComment}
                                        onChange={(e) => setOrderHistoryComment(e.target.value)}
                                        placeholder="Yorum ekleyin"
                                    >
                                    </input>
                                    <div style={{width: "20%", justifyContent: "center", display: "flex"}}>
                                        <Button onClick={handleAddHistoryComment(activeItem.orderDetails.orderId)}>Ekle</Button>
                                    </div>
                                </div>
                                <div className="salesdetail-content-left-lower-order-history-entries">
                                    {
                                        activeItem.orderDetails.orderHistory.map((orderHistoryEntry: any, index: number) =>
                                            <div key={index} className="salesdetail-content-left-lower-order-history-entry">
                                                <div style={{ display: "flex", flexDirection: "column" }}>
                                                    <span style={{ marginBottom: ".5rem", color: "gray" }}>{orderHistoryEntry.commentedPersonName}</span>
                                                    <span>{orderHistoryEntry.orderHistoryEntry}</span>
                                                </div>
                                                <span style={{ display: "flex", alignItems: "center" }}>{orderHistoryEntry.commentedDate}</span>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="salesdetail-content-right">
                        <div className="salesdetail-content-right-order-details">
                            <div className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray" }}>Sipariş Kanalı</span>
                                <span>{activeItem.orderDetails.orderChannel}</span>
                            </div>
                            <div className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray" }}>Sipariş Toplamı</span>
                                <span>{salesState.currencySymbol}{" "}{activeItem.products.productCount * activeItem.price}</span>
                            </div>
                        </div>
                        <div className="salesdetail-content-right-order-details">
                            <div className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray" }}>Sipariş Tarihi</span>
                                <span>{activeItem.orderDetails.orderDate}</span>
                            </div>
                            <div className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray" }}>Sipariş No</span>
                                <span>{activeItem.orderDetails.orderId}</span>
                            </div>
                        </div>
                        <div className="salesdetail-content-right-order-detail-item">
                            <div style={{ borderBottom: "1px solid #ededed", paddingBottom: "1rem" }} className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray", fontSize: "13px" }}>TESLİMAT BİLGİLERİ</span>
                                <span><span style={{ color: "gray" }}>Ad: </span>{activeItem.customer}</span>
                                <span><span style={{ color: "gray" }}>Tel No: </span>{activeItem.deliveryInformation.toBeDeliveredPhoneNumber}</span>
                                <span><span style={{ color: "gray" }}>TC Kimlik No: </span>{activeItem.deliveryInformation.toBeDeliveredIdentityNumber}</span>
                                <span style={{ color: "gray", paddingTop: ".5rem" }}>{activeItem.deliveryInformation.toBeDeliveredAddress}</span>
                            </div>
                            <div className="salesdetail-content-right-order-detail-item">
                                <span style={{ color: "gray", fontSize: "13px" }}>FATURA BİLGİLERİ</span>
                                <span><span style={{ color: "gray" }}>Ad: </span>{activeItem.customer}</span>
                                <span><span style={{ color: "gray" }}>Tel No: </span>{activeItem.deliveryInformation.toBeDeliveredPhoneNumber}</span>
                                <span><span style={{ color: "gray" }}>TC Kimlik No: </span>{activeItem.deliveryInformation.toBeDeliveredIdentityNumber}</span>
                                <span style={{ color: "gray", paddingTop: ".5rem" }}>{activeItem.deliveryInformation.toBeDeliveredAddress}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                .salesdetail-root {
                    width:85%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    background-color:#ededed;

                }
                .salesdetail-content {
                    width:90%;
                    height:90%;
                    margin:auto;
                    margin-left:3rem;
                    display:flex;
                }
                .salesdetail-content-left{
                    width:75%;
                    height:100%;
                    position:relative;
                    display:flex;
                    flex-direction:column;
                    margin-right:2rem;
                }
                .salesdetail-content-right{
                    width:25%;
                    height:75%;
                    border:1px solid white;
                    background-color:white;
                    border-radius:5px;
                    position:relative;
                    display:flex;
                    flex-direction:column;
                    padding:1rem;
                }
                .salesdetail-content-right-order-detail-item {
                    display:flex;
                    flex-direction:column;
                    font-size:13px;
                    color:darkblue;
                    width:100%;
                    padding-top:1rem;
                }
                .salesdetail-content-right-order-details {
                    display:flex;
                    // margin-bottom:1rem;
                    // justify-content:space-between;
                }
                .salesdetail-content-left-upper {
                    height:30%;
                    background-color:white;
                    margin-bottom:2rem;
                    border:1px solid #ededed;
                    border-radius:5px;
                    display:flex;
                    flex-direction:column;
                    padding:1rem;
                }
                .salesdetail-content-left-lower {
                    background-color:white;
                    height:60%;
                    border:1px solid #ededed;
                    border-radius:5px;
                    display:flex;
                    flex-direction:column;
                }
                .salesdetail-content-left-lower-order-history-title{
                    color:darkblue;
                    display:flex;
                    height:50px;
                    border-bottom:1px solid #ededed;
                    padding:.5rem;
                    margin:.5rem;
                    align-items:center;
                    font-size:13px;
                    font-weight:500;
                }
                .salesdetail-content-left-lower-order-history {
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    overflow:auto;
                }
                .salesdetail-content-left-lower-order-history-input-area {
                    padding: .5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .salesdetail-content-left-lower-order-history-entries {
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    margin:.5rem;
                    border-left:1px solid #ededed;
                }
                .salesdetail-content-left-lower-order-history-entry {
                    background-color:#ededed;
                    // height:50px;
                    margin:.5rem;
                    display:flex;
                    justify-content:space-between;
                    padding:.5rem;
                    border-radius:5px;
                }
                .salesdetail-content-left-upper-card {
                    height:75px;
                    background-color:#ededed;
                    display:flex;
                    justify-content:space-between;
                    width:100%;
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                    border-radius:5px;
                }
                .salesdetail-content-left-upper-shipping {
                    display:flex;
                    justify-content:space-between;
                    width:100%;
                    height:50px;
                    align-items:center;
                }
                .salesdetail-content-left-upper-shipping-print-buttons {
                    width:40%;
                    justify-content:space-around;
                    display:flex;
                }
                .salesdetail-content-left-upper-card-product-count {
                    width: 25%;
                    height: 50%;
                    border: 9px solid white;
                    margin: auto;
                    margin-left: 1rem;
                    align-items: center;
                    display: flex;
                    justify-content: center;
                }
                .salesdetail-toolbar {
                    height:50px;
                    padding:.5rem;
                    background-color:white;
                    display:flex;
                    align-items:center;
                    padding-left:2rem;
                }
                @media only screen and (max-width: 1440px){
                    .salesdetail-content-left-upper-shipping-print-buttons {
                        width:60% !important;
                    }
                }
            `}
                </style>
            </div>}
        </React.Fragment>
    )
}

const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({
        addOrderHistoryComment: Actions.addOrderHistoryComment
    }, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connect<{}, {}, PropsFromRedux>(mapStateToProps, mapDispatchToProps)(SalesDetail)

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = initialOrderData.map((order: Order) => ({
        params: { id: order.orderDetails.orderId.toString() },
    }))
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const item = initialOrderData.find((order: Order) => order.orderDetails.orderId === Number(id))
        return { props: { item } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}