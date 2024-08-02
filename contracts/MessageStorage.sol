// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MessageStorage {
    string private message;
    string private password;
    address public admin;

    constructor(string memory _message, string memory _password) {
        message = _message;
        password = _password;
        admin = msg.sender;
    }

    function setMessage(string memory _newMessage) public {
        require(msg.sender == admin, "Only admin can change the message");
        message = _newMessage;
    }

    function getMessage(string memory _password) public view returns (string memory) {
        require(keccak256(abi.encodePacked(_password)) == keccak256(abi.encodePacked(password)), "Incorrect password");
        return message;
    }
}
