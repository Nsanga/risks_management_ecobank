const data = {
    categories: [
        {
            name: "Regulator Line of Business",
            subCategories: [
                {
                    name: "Retail/ Consumer Banking",
                    items: [
                        "Personal (or Retail) Banking",
                        "Private Banking",
                        "Card Service"
                    ]
                },
                {
                    name: "Corporate Banking",
                    items: [
                        "Corporate Finance",
                        "Government/Municipal Finance",
                        "Merchant Banking",
                        "Advisory Service"
                    ]
                },
                // Add other sub-categories as needed
            ]
        },
        {
            name: "Product Type",
            subCategories: [
                {
                    name: "Commercial Banking",
                    items: [
                        "Business Account",
                        "RapidCollect",
                        "DiGi Banking Account"
                        // Add other items as needed
                    ]
                },
                {
                    name: "Consumer Banking",
                    items: [
                        "Evolution Account",
                        "Currents Accounts",
                        "Islamic Account",
                        // Add other items as needed
                    ]
                },
                // Add other sub-categories as needed
            ]
        },
        {
            name: "System Type",
            items: [
                "ACH",
                "Advance Plus",
                "Agency Banking",
                // Add other items as needed
            ]
        },
        {
            name: "Boundary Event Classification",
            items: [
                "Not Set",
                "Credit Boundary",
                "Market Boundary Event",
                // Add other items as needed
            ]
        }
    ]
};

export default data;
