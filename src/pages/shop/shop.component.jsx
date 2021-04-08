import React, { Component } from "react";

import CollectionOverview from '../../components/collections-overview/collections-overview.component'


import CollectionPreview from "../../components/collection-preview/collection-preview.component";



const ShopPage = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverview />
  </div>
);



export default ShopPage;
