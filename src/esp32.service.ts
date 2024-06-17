import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class Esp32Service {
  private readonly esp32Url = 'http://172.20.10.2'; 

  async getHello(): Promise<string> {
    try {
      console.log(`Connecting to ESP32 at ${this.esp32Url}`);
      const response = await axios.get(this.esp32Url);
      console.log('Response from ESP32:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error connecting to ESP32:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      }
      throw new Error('Could not connect to ESP32');
    }
  }
}
