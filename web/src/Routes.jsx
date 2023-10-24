// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={ScaffoldLayout} title="IssueTemplates" titleTo="issueTemplates" buttonLabel="New IssueTemplate" buttonTo="newIssueTemplate">
        <Route path="/issue-templates/new" page={IssueTemplateNewIssueTemplatePage} name="newIssueTemplate" />
        <Route path="/issue-templates/{id:Int}/edit" page={IssueTemplateEditIssueTemplatePage} name="editIssueTemplate" />
        <Route path="/issue-templates/{id:Int}" page={IssueTemplateIssueTemplatePage} name="issueTemplate" />
        <Route path="/issue-templates" page={IssueTemplateIssueTemplatesPage} name="issueTemplates" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ItemCategories" titleTo="itemCategories" buttonLabel="New ItemCategory" buttonTo="newItemCategory">
        <Route path="/item-categories/new" page={ItemCategoryNewItemCategoryPage} name="newItemCategory" />
        <Route path="/item-categories/{id:Int}/edit" page={ItemCategoryEditItemCategoryPage} name="editItemCategory" />
        <Route path="/item-categories/{id:Int}" page={ItemCategoryItemCategoryPage} name="itemCategory" />
        <Route path="/item-categories" page={ItemCategoryItemCategoriesPage} name="itemCategories" />
      </Set>
      <Set wrap={ScaffoldLayout} title="InventoryItems" titleTo="inventoryItems" buttonLabel="New InventoryItem" buttonTo="newInventoryItem">
        <Route path="/inventory-items/new" page={InventoryItemNewInventoryItemPage} name="newInventoryItem" />
        <Route path="/inventory-items/{id:Int}/edit" page={InventoryItemEditInventoryItemPage} name="editInventoryItem" />
        <Route path="/inventory-items/{id:Int}" page={InventoryItemInventoryItemPage} name="inventoryItem" />
        <Route path="/inventory-items" page={InventoryItemInventoryItemsPage} name="inventoryItems" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
