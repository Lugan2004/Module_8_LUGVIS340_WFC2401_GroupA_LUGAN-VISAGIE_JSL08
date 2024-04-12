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
//step by step explainantion on why the console will output the same values.
// 1. The first time new BankBranch() is called with the branchA variable, the constructor checks if bankBranchInstance is null.
// Since it is null, it creates a new instance of BankBranch with the provided branchInfo and assigns it to bankBranchInstance.
// This new instance is then returned and assigned to the branchA variable.
// 2. The second time new BankBranch() is called with the branchB variable, the constructor againchecks if bankBranchInstance is null.
// Since it is not null, it returns the existing instance from the bankBranchInstance variable.
// 3. The getBranchInfo() method is called on each instance and returns the branch information.
// 4. The console.log() function's is used to print the branch information to the console.
// 5. So the output will be the same for both instances.

// Verify that branchA and branchB are referring to the same instance
console.log(branchA === branchB); // Output: true