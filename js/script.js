// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: mar 2023
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = document.getElementById("street-number").value
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + streetNumber + ", " + streetName + "."
}
