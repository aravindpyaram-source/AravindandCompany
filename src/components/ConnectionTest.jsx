import React, { useEffect, useState } from "react";
import { API_ENDPOINTS, apiRequest } from "../api/config";

function ConnectionTest() {
  const [status, setStatus] = useState("testing");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const testConnection = async () => {
      try {
        setStatus("testing");
        setMessage("Testing connection to backend...");
        
        // Test each endpoint
        const endpoints = Object.values(API_ENDPOINTS);
        for (const endpoint of endpoints) {
          try {
            const response = await fetch(endpoint, { method: 'HEAD' });
            if (response.ok) {
              setMessage(prev => prev + `\n✓ ${endpoint} - OK`);
            } else {
              setMessage(prev => prev + `\n✗ ${endpoint} - Failed (${response.status})`);
            }
          } catch (error) {
            setMessage(prev => prev + `\n✗ ${endpoint} - Error: ${error.message}`);
          }
        }
        
        setStatus("complete");
      } catch (error) {
        setStatus("error");
        setMessage(`Connection test failed: ${error.message}`);
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="font-bold mb-2">Backend Connection Test</h3>
      <div className="whitespace-pre-wrap font-mono text-sm">
        {status === "testing" ? "Testing..." : message}
      </div>
    </div>
  );
}

export default ConnectionTest;