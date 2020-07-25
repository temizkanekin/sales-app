import React from 'react'
import SideBar from '../../components/SideBar'
import { Button } from '../../components/Button'
import { Order } from '../../interfaces'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/actions'
import Router from 'next/router'

type SalesMarketToolbarItem = {
    label: string,
    value: any
}

const salesMarketToolbarItems: SalesMarketToolbarItem[] = [
    {
        label: "Tümü",
        value: undefined
    },
    {
        label: "Yeni",
        value: "YENİ"
    },
    {
        label: "Hazırlanan",
        value: "ONAYLANDI"
    },
    {
        label: "Tamamlanan",
        value: "TESLİM EDİLDİ"
    },
    {
        label: "Kargolanan",
        value: "KARGOLANDI"
    },
    {
        label: "İptal",
        value: "İPTAL EDİLDİ"
    },
]

const SalesMarket = ({ salesState }: any) => {
    const [activeSalesType, setActiveSalesType] = React.useState(undefined)

    return (
        <React.Fragment>
            <SideBar />
            <div className="salesmarket-root">
                <div className="salesmarket-toolbar">
                    {
                        salesMarketToolbarItems.map(item =>
                            <span onClick={() => setActiveSalesType(item.value)}
                                className={`${item.value === activeSalesType ? "salesmarket-toolbar-item-active" : "salesmarket-toolbar-item"}`}
                                key={item.value || ""}>{item.label}</span>
                        )
                    }
                </div>
                <div className="salesmarket-content">
                    <table className="salesmarket-table">
                        <caption style={{ textAlign: "initial", height: "50px", padding: ".5rem" }}>
                            <div className="salesmarket-table-head">
                                <span style={{ fontWeight: "bold", color: "darkblue", fontSize: "17px" }}>Siparişler</span>
                                <Button large>Yeni Siparişleri Al</Button>
                            </div>
                        </caption>
                        <thead>
                            <tr style={{ cursor: 'auto' }}>
                                <th>Sipariş Bilgileri</th>
                                <th>Müşteri</th>
                                <th>Ürünler</th>
                                <th>Durumu</th>
                                <th>Fiyat</th>
                            </tr>
                        </thead>
                        <tbody className="salesmarket-table-body">
                            {
                                salesState.orderDatas.filter((orderData: Order) => !activeSalesType ? orderData : orderData.status.label === activeSalesType).
                                    map((orderData: Order) =>
                                        <tr onDoubleClick={() => Router.push(`/salesmarket/${orderData.orderDetails.orderId}`)} className="salesmarket-table-body-row"
                                            key={orderData.orderDetails.orderId}>
                                            <td>
                                                {/* <span>{orderData.orderDetails.orderChannel}</span> */}
                                                <span style={{ color: 'darkblue' }}>{orderData.orderDetails.orderId}</span><br />
                                                {orderData.orderDetails.orderDate}
                                            </td>
                                            <td>
                                                {orderData.customer}
                                            </td>
                                            <td>
                                                <span key={orderData.products.productName}>{orderData.products.productName}<br />
                                                    {orderData.products.productCount} Ürün</span>
                                            </td>
                                            <td>
                                                <Button large buttonType={orderData.status.type} onClick={() => console.log(1)}>{orderData.status.label}</Button>
                                            </td>
                                            <td>
                                                {orderData.price}{salesState.currencySymbol}
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                    <div className="salesmarket-order-count">
                        Toplam {salesState.orderDatas.length} adet listelendi
                    </div>
                </div>
                <style jsx>{`
                tr{
                    cursor:pointer;
                }
                tr:hover {
                    background-color:lightblue;
                }
                th {
                    color:#6495ed;
                    font-size:13px;
                    padding:1rem;
                    background-color:lightblue;
                    width:20%
                    // border-bottom:1px solid #6495ed;
                    // border-top:1px solid #6495ed;
                }
                td {
                    border-bottom:1px solid #ededed;
                    padding:1rem;
                    width:20%;
                }
                .salesmarket-root {
                    width:80%;
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    background-color:#ededed;

                }
                .salesmarket-toolbar {
                    height:50px;
                    padding:.5rem;
                    background-color:white;
                    display:flex;
                    align-items:center;
                    padding-left:2rem;
                }
                .salesmarket-table-head {
                    display: flex;
                    height: 100%;
                    align-items: center;
                    justify-content: space-between;
                }
                .salesmarket-toolbar-item {
                    margin-right:2rem;
                    cursor:pointer;
                    height:100%;
                    display:flex;
                    align-items:center;
                }
                .salesmarket-toolbar-item-active {
                    margin-right:2rem;
                    cursor:pointer;
                    height:100%;
                    display:flex;
                    align-items:center;
                    border-bottom:2px solid #007FFF;
                }
                .salesmarket-table {
                    border-collapse: collapse;
                    width:95%;
                    margin:auto;
                    position:relative;
                }
                .salesmarket-content {
                    width:90%;
                    height:90%;
                    margin:auto;
                    border:1px solid white;
                    background-color:white;
                    border-radius:5px;
                    position:relative;
                }
                .salesmarket-table-body {
                    text-align:center;
                }
                .salesmarket-table-body-row {
                    height:50px;
                    padding:.5rem;
                }
                .salesmarket-order-count {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    padding: 1rem;
                }
            `}
                </style>
            </div>
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
        setActiveSideBarItemId: Actions.setActiveSideBarItemId
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SalesMarket)