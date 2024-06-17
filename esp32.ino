#include <WiFi.h>
#include <ESPAsyncWebServer.h>

const char* ssid = "Patrick";
const char* password = "12345678";

AsyncWebServer server(80);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.print("Connected! IP Address: ");
  Serial.println(WiFi.localIP());

  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(200, "text/plain", "Hello ไอ้สัส");
  });

  server.begin();
  Serial.println("HTTP server started");
}

void loop() {
  // Nothing needed here
}
