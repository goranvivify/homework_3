import Utils from "../utils";

const utils = new Utils();

class Boards {
  setupTests() {
    utils.visitUrl("/");
  }
  addBoard(boardName) {
    cy.addBoard(boardName);
  }
  returnToBoardView() {
    cy.returnToBoardView();
  }
  deleteBoard(boardName) {
    cy.deleteBoard(boardName);
  }
}

export default Boards;
