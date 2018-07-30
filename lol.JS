db.createCollection("usa_tax_rates", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
				 required: ["State", "ZipCode", "TaxRegionName", "StateRate", "EstimatedCombinedRate", "EstimatedCountyRate", "EstimatedCityRate", "EstimatedSpecialRate", "RiskLevel" ],
         properties: {
            State: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            ZipCode: {
               bsonType: [ 'string', 'number' ],
               description: "must be a string and is required"
            },
					 TaxRegionName: {
						 bsonType: "string",
						 description: "must be a string and is required"
					 },
					 StateRate: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
					 EstimatedCombinedRate: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
					 EstimatedCountyRate: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
					 EstimatedCityRate: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
					 EstimatedSpecialRate: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
					 RiskLevel: {
						 bsonType: "number",
						 description: "must be a string and is required"
					 },
         }
      }
   }
})


db.createCollection("ca_tax_rates", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["Code", "Name", "Taxes" ],
            properties: {
                Code:{
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                Taxes:[{
                    Code: {
                        bsonType:"string",
                        description:"must be a string and is required"
                    },
                    Name: {
                        bsonType: "string",
                        description:"must be a string and is required"
                    },
                    Type: {
                        bsonType: "string",
                        description:"must be a string and is required"
                    },
                    Tax: {
                        bsonType: "number",
                        description:"must be a string and is required"
                    },
                }],
                EstimatedCombinedRate: {
                    bsonType: "number",
                    description:"must be a string and is required"
                },
            }
        }
    }
})

// minItems: 1,
// maxItems: 50,

db.createCollection("ca_tax_rates", {
    validator: {
       $jsonSchema: {
         bsonType: "object",
         required: [ "Code", "Name", "Taxes" ],
         properties: {
           Code: {
             bsonType: "string",
             description: "must be a string and is required"
           },
           Name: {
             bsonType: 'string',
             description: "must be a string and is required"
           },
           Taxes: {
             bsonType: ["array"],
             items: {
               bsonType: ["object"],
               required: ["quantity", "measure", "ingredient"],
               additionalProperties: false,
               description: "'ingredients' must contain the stated fields.",
               properties: {
                 Code: {
                   bsonType: "string",
                   description: "must be an string and is required"
                 },
                 Name: {
                   bsonType: "string",
                   description: "must be an string and is required"
                 },
                 Type: {
                   bsonType: "string",
                   description: "must be an string and is required"
                 },
                 Tax: {
                   bsonType: "number",
                   description: "must be an string and is required"
                 }
               }
             }  
           },
           
         }
       }
    }
 })