import React from 'react';
import {IProduct} from "../types/product";
import {Button, Container, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {RootState} from "../store/reducers";
import DashboardItem from "../components/dashboard/DashboardItem";
import {useHistory} from "react-router-dom";

/**
 * Show all product list for admin.
 * @constructor
 */
const DashBoard: React.FC = () => {
    const products: IProduct[] = useSelector((state: RootState) => state.onlineStoreReducer.products);
    const history = useHistory();
    const onHandelCreateProduct = () => history.push('/create-product')

    return (
        <div className='dashboard-page background-color-1'>
            <Container>
                <Table responsive className="table-data">
                    <thead>
                    <tr>
                        <td colSpan={7}/>
                        <td colSpan={2}>
                            <Button className="custom-primary-button" onClick={onHandelCreateProduct}>Add new
                                Product</Button>
                        </td>
                    </tr>
                    <tr>
                        <th className="index-col px-0">#</th>
                        <th className="text-center" colSpan={2}>Item</th>
                        <th className="text-center">sellPrice</th>
                        <th className="text-right">Price</th>
                        <th className="text-center">type</th>
                        <th className="text-center">stockQty</th>
                        <th className="text-center" colSpan={2}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products.map((product: IProduct, index: number) =>
                            <DashboardItem key={index} index={index} product={product}/>)
                    }

                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default DashBoard;