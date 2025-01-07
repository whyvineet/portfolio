const fs = require("fs");
const path = require("path");

const filePath = path.resolve(__dirname, "views.json");

exports.handler = async () => {
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
      body: JSON.stringify({ count: data.count }),
    };
  } catch (error) {
    console.error("Error updating view count:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to update count" }),
    };
  }
};
