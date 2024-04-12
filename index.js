// Step 1: Create a variable to store the singleton instance of the bank branch
let bankBranchInstance = null;

// Step 2: Define the BankBranch class
class BankBranch {
  constructor(branchInfo) {
    // Step 3: Check if the bankBranchInstance variable is null
    if (bankBranchInstance === null) {
      // If it's null, create a new instance with the provided branchInfo and assign it to bankBranchInstance
      bankBranchInstance = this;
      this.branchInfo = branchInfo;
    }

    // Return the bankBranchInstance whether it's newly created or existing
    return bankBranchInstance;
  }

  // Step 4: Add methods to the BankBranch class for managing branch-related information
  getBranchInfo() {
    return this.branchInfo;
  }
}

// Step 5: Usage section
// Create instances of the BankBranch class
const branchA = new BankBranch({ name: 'Cape Town branch', address: '123 Voortrekker Rd' });
const branchB = new BankBranch({ name: 'Prieska branch', address: '456 pappegaai Str' });

// Use the getBranchInfo method to retrieve branch information
console.log(branchA.getBranchInfo()); // Output:{ name: 'Cape Town branch', address: '123 Voortrekker Rd' }
console.log(branchB.getBranchInfo()); // Output:{ name: 'Cape Town branch', address: '123 Voortrekker Rd' }

// Verify that branchA and branchB are referring to the same instance
console.log(branchA === branchB); // Output: true