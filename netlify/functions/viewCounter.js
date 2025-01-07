const fs = require("fs");
const path = require("path");

const filePath = path.resolve("/tmp/views.json");

exports.handler = async (event, context) => {
  try {
    // Read the current count
    let data = { count: 0 };
    if (fs.existsSync(filePath)) {
      data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }

    // Increment the count
    data.count += 1;

    // Save the updated count
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "https://whyvineet.xyz",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: data.count }),
    };
  } catch (error) {
    console.error("Error updating view count:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "Failed to update count" }),
    };
  }
};
