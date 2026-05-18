# BuilderGuard AI — Unified Municipal Compliance Node

BuilderGuard AI is a high-performance mobile-wrapped system designed to detect real estate fraud, land grabbing vectors, and zoning non-compliance by executing decoupled entity verification against fragmented municipal databases.

## 🚀 Deployment Links
* **Mobile Installer (APK):** [INSERT YOUR GOOGLE DRIVE LINK HERE]
* **Production Web Engine:** https://builderguard-ai-84942831573.asia-southeast1.run.app/

## 🛠️ System Architecture
The application leverages a hybrid architectural model to ensure zero backend duplication and rapid data-stream delivery under high constraint environments:

1. **Cloud Run Backend Engine:** Deploys our multi-agent LLM parser that ingests unstructured document formats, runs OCR token extraction, and isolates geographical and societal entities.
2. **Multi-Node Registry Lookup:** Decouples text metadata from explicit document claims. Extracted entities are cross-referenced against absolute state indices including building control authorities (SBCA), development master plans (KDA/CDA), and active litigation registries (NAB).
3. **Native Mobile Wrapper (React Native):** A light-footprint native Android container managing OS metrics, runtime status bar spacing bounds, and loading states.
4. **Asynchronous Share Bridge:** Avoids heavy third-party file-system dependencies by injecting a JavaScript bridge that captures dynamic web data blobs and routes them straight to the native Android Share Sheet layer.

## 📦 Tech Stack
* **Frontend/Mobile Core:** React Native, TypeScript, `react-native-webview`
* **Compilation Assembly:** Gradle Build Tool (Android SDK Target 34)
* **Backend Processing Node:** Python, LangChain Core, Cloud-Deployed LLM Agent Framework
