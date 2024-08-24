/** This file creates a new token using the ERC-20 token library from openzeppelin
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing the necessary libraries
import "@openzeppelin/contracts/token/ERC20/ERC20.sol"; // importing the ERC20 token library from openzeppelin (for creating the token)
import "@openzeppelin/contracts/access/Ownable.sol"; // importing the Ownable library from openzeppelin (for adding ownership capabilities)

contract MyToken is ERC20, Ownable {

    /** The constructor function calls the ERC20 smart contract's constructor
     * and assigns the name and symbol of the token. After that, it mints the initial supply
     * of the token to the contract creator so that the token can be distributed.
     */
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") Ownable(msg.sender) {
        _mint(msg.sender, initialSupply); // minting the initial supply of the token to the contract creator
    }

    /** The mint function allows the contract owner to mint new tokens to the contract.
     * It takes the address of the recipient and the amount of tokens to mint as arguments.
     */
    function mint(address recipient, uint256 amount) public onlyOwner {
        _mint(recipient, amount); // minting the specified amount of tokens to the recipient
    }

    /** The burn function allows the contract owner to burn tokens from the contract.
     * It takes the amount of tokens to burn as an argument.
     */
    function burn(uint256 amount) public onlyOwner {
        _burn(msg.sender, amount); // burning the specified amount of tokens from the contract
    }
    
} 