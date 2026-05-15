# King's Reach (王权网络)

A tactical turn-based Roguelike where chess meets network theory. Powered by a hybrid TypeScript/WASM engine.
一款结合了国际象棋与网络拓扑理论的策略回合制肉鸽游戏。采用 TypeScript/WASM 混合动力引擎驱动。

---

## 📖 Introduction / 简介

**King's Reach** is not just another chess variant. It introduces a "Network Connectivity" mechanic: your pieces are only active when they are part of a network connected to your King. Build your roster, draft reality-bending skills, and navigate through procedurally difficult chapters to checkmate the enemy AI.

**《王权网络》** 不仅仅是一款变体象棋。它引入了核心的“网络连通”机制：你的棋子只有在与国王保持网络连接时才能行动。在肉鸽模式中构筑你的棋组，抽取改变规则的强大技能，并在难度递增的关卡中击败敌方 AI。

---

## 🕹️ Core Mechanics / 核心机制

### 1. Network & Connectivity / 网络与连通性
*   **Source**: The King (and specific proxy pieces) acts as the network source.
    *   **源点**：国王（及特定的代理棋子）是网络的能量源。
*   **Transmission**: Pieces extend the network based on their attack/move range.
    *   **传输**：棋子根据其攻击或移动范围延伸网络。
*   **Frozen State**: If the path to the King is severed, the piece becomes "Frozen" (cannot move/attack).
    *   **瘫痪状态**：如果与国王的路径被切断，棋子将进入“瘫痪”状态（无法移动或攻击）。

### 2. Roguelike Elements / 肉鸽要素
*   **Drafting**: Gain pieces, items, or skills after each victory.
    *   **抽取**：每局胜利后可以获得棋子、道具或技能。
*   **Skill System**: Over 17+ unique atomic skills (e.g., *Satellite Link*, *Omega Mirror*).
    *   **技能系统**：17种以上独特的原子能力（如：卫星链路、终局镜像）。
*   **Persistent Roster**: Level up your individual pieces across levels.
    *   **持久阵容**：棋子在关卡间可保留并提升等级。

---

## 🛠️ Technical Architecture / 技术架构

*   **Hybrid AI Engine**: 
    *   **TypeScript Engine**: High flexibility for complex skill simulations.
    *   **WASM Engine (C++)**: High-performance Minimax search with Alpha-Beta pruning, Bitmask-based atomic capability evaluation, and Zobrist Hashing (~10-20x speedup).
*   **混合 AI 引擎**:
    *   **TS 引擎**：为复杂的技能模拟提供极高的灵活性。
    *   **WASM 引擎 (C++)**：高性能极小极大算法，包含 Alpha-Beta 剪枝、基于位掩码的原子能力评估及 Zobrist 哈希（提速约 10-20 倍）。
*   **Atomic Capability Protocol**: Skills are translated into 64-bit masks passed between JS and C++.
    *   **原子能力协议**：技能被转化为 64 位掩码，在 JS 与 C++ 之间极速传递。
*   **State Management**: Complex Roguelike state handled via Zustand slices.
    *   **状态管理**：使用 Zustand 切片管理复杂的肉鸽全局进度。

---

## 🚀 Quick Start / 快速开始

### Prerequisites / 前提条件
*   Node.js (v18+)
*   Emscripten (Optional, for re-compiling WASM)

### Installation / 安装
```bash
# Clone the repository
git clone https://github.com/your-repo/kings-reach.git

# Install dependencies
npm install

# Build WASM (If Emscripten is installed)
./scripts/build-wasm.bat

# Start Development Server
npm run dev
```

---

## 🗺️ Roadmap / 开发路线

- [x] **Phase 1**: Core network logic and UI. / 第一阶段：核心网络逻辑与 UI。
- [x] **Phase 2**: Roguelike progression and save system. / 第二阶段：肉鸽进程与存档系统。
- [x] **Phase 3**: WASM high-performance search integration. / 第三阶段：WASM 高性能搜索集成。
- [ ] **Phase 4**: Boss specialized skills and map hazards. / 第四阶段：Boss 特殊技能与地图环境障碍。
- [ ] **Phase 5**: Steam/Mobile deployment. / 第五阶段：Steam 与移动端部署。

---

## 📄 License / 许可证

Copyright © 2024 King's Reach Developers. All rights reserved.
See [Private License](./LICENSE) for details.

版权所有 © 2024 王权网络开发团队。保留所有权利。
详情请参阅 [私有许可证](./LICENSE)。