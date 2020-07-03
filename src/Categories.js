import React from "react";
import { CategoryLink, CategoryLayout, Category } from "./StyledElements";
const Categories = ({ onCategoryChange }) => {
  return (
    <CategoryLayout>
      <Category politics onClick={onCategoryChange} data-item="us">
        <CategoryLink>United States</CategoryLink>
      </Category>
      <Category technology onClick={onCategoryChange} data-item="in">
        <CategoryLink>India</CategoryLink>
      </Category>
      <Category local onClick={onCategoryChange} data-item="cn">
        <CategoryLink>China</CategoryLink>
      </Category>
      <Category opinion onClick={onCategoryChange} data-item="fr">
        <CategoryLink>France</CategoryLink>
      </Category>
      <Category sports onClick={onCategoryChange} data-item="it">
        <CategoryLink>Italy</CategoryLink>
      </Category>
    </CategoryLayout>
  );
};

export default Categories;
