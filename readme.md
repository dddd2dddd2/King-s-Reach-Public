# King's Reach (王权网络)

A tactical turn-based Roguelike where chess meets network theory, powered by a hybrid TypeScript/WASM engine, an interactive UI Editor, and a custom WebGL GPU fluid/grid simulation renderer.
一款结合了国际象棋与网络拓扑理论的策略回合制肉鸽游戏。采用 TypeScript/WASM 混合动力引擎驱动，配有内置的交互式 UI 编辑器，以及自研的 WebGL GPU 流体与弹性网格物理渲染管线。

---

## 📖 Introduction / 简介

**King's Reach** is a tactical roguelike that transforms the classic rules of chess through the lens of network topology. Pieces are only functional when they maintain a secure, hop-by-hop network link back to your King (the network source). Once severed, they enter a "Frozen" state and must be reconnected. Build your roster, equip orbital hardware, and face down procedurally generated strategic crises, map hazards, and boss protocols.

**《王权网络》** 是一款将国际象棋与网络拓扑理论结合的策略肉鸽游戏。棋子只有在与国王（网络源点）保持跳步连接时才能激活行动。一旦连接被切断，棋子将陷入“瘫痪”状态。在命运轮局中，玩家可以招募专属编制、挂载外设硬件，并面对随机生成的战局危机、地块异常与 Boss 协议。

---

## 🕹️ Core Mechanics / 核心机制

### 1. Network & Topology / 网络与拓扑连接
*   **Active Signal Source**: The King (or proxy nodes) generates the network. The signal propagates based on adjacent movement and attack vectors.
    *   **动态信号源**：由国王（或特定代理节点）产生。信号基于棋子的相邻移动与攻击范围进行传递。
*   **Frozen & Reconnection**: Severed units are paralyzed. Reconnecting the network immediately restores their operational status.
    *   **瘫痪与重连**：断网棋子无法执行指令，重新建立连接后可瞬间恢复行动力。
*   **Combo System**: Chains of captures on active turns trigger gold bonuses via an exponential multiplier.
    *   **连击经济**：在连通状态下的连续击杀将触发指数级倍率的金币加成。

### 2. Diverse Monarch Cores / 异质化君主核心
*   **Happy Prince (快乐王子)**: High starting gold but zero combat income. Spawns an essential "Swallow" escort node; any items purchased for the Prince are melted down into legendary equipment for his allies.
    *   **快乐王子**：高额初始资金但无战备收益。携手专属护卫“燕子”登场，为国王购买的硬核外设将熔炼为全军传说装备。
*   **King Arthur (亚瑟王)**: Decentralizes power. Any Level 3+ or legendary unit becomes a secondary signal source, but maximum unit levels are capped and the Queen is unavailable.
    *   **亚瑟王**：权力下放。所有 3 级或配有传说级外设的棋子都可作为次级源点中继信号。最高等级受限，且无法招募皇后。
*   **Odysseus (奥德修斯)**: Implements map-edge wrapping for all units and network signals. Watch out for the "Siren's Song" which periodically drifts units into collision courses.
    *   **奥德修斯**：空间穿透拓扑。全军及信号可跨越地图边界折返。需要防范定期触发的“塞壬之歌”随机漂移与碰撞引爆。

### 3. Special Hazards & Boss Protocols / 异常环境与 Boss 协议
*   **15 Environmental Anomalies**: Navigate conveyor belts, high-voltage laser grids, wormholes, anti-pawn landmines, mud swamps, and Faraday cages.
    *   **15 种异常地块**：传送带、高压激光电网、双向虫洞、反步兵地雷、泥潭、以及绝对屏蔽信号的法拉第笼。
*   **14 Specialized Boss Behaviors**: Adapt to advanced tactics like *Quantum Mirage* (decoy death-swap), *Necromancer* (zombie revival), *Permission Denied* (class bans), and *Sentinel* clockwork patrols.
    *   **14 种 Boss 机制**：面对包括量子分身替死、死灵复苏（玩家亡灵化为敌方僵尸）、权限篡改（定期禁用特定兵种）、哨兵巡逻等极端威胁。

---

## 🛠️ Technical Architecture / 技术架构

```
   ┌─────────────────────────────────────────────────────────┐
   │                       WebGL View                        │
   │    (NeonEngine - Tiling Starfield, GPGPU Grid spring)   │
   ├────────────────────────────┼────────────────────────────┤
   │                       UI Editor                         │
   │    (Interactive UIManager & Scene Node Graph Editor)    │
   └────────────────────────────▲────────────────────────────┘
                                │ Sync Render List
   ┌────────────────────────────┴────────────────────────────┐
   │                    TypeScript Core                      │
   │   (Zustand State, Hook Dispatcher, Interaction Service) │
   └────────────────────────────┬────────────────────────────┘
                                │ 64-bit Bitmask Protocol
   ┌────────────────────────────▼────────────────────────────┐
   │                    C++ WebAssembly                      │
   │ (Alpha-Beta Minimax, PVS, LMR, Transposition Table, SEE)│
   └─────────────────────────────────────────────────────────┘
```

### 1. High-Performance C++ WASM Search Core
*   **Minimax Search with PVS & LMR**: Built on an optimized search structure featuring Principal Variation Search, Null Move Pruning, and Logarithmic Late Move Reductions (LMR).
*   **Transposition Table**: Implements memory-aligned hash entries indexed via Zobrist increment hashes to reduce redundant node evaluation.
*   **Static Exchange Evaluation (SEE)**: Evaluates capture sequences on contested squares to prune suboptimal branches early.

### 2. Custom WebGL GPU Grid Simulation Engine
*   **GPGPU Grid Spring Simulation**: Driven by custom shaders managing velocity and position buffers to compute grid displacement in real-time. Supports physics modes like REPEL, PINCH, ATTRACT, and SHOCK.
*   **Distortion & Post-Processing**: Direct integration of a screen-space distortion layer (Displacement Maps) alongside chromatic aberration, noise, CRT scanlines, and an Advanced Bloom filter.
*   **Dynamic Space Starfield**: A multi-layered parallax background reacting to the center of gravity of the board's pieces.

### 3. Interactive UI Editor / 交互式 UI 编辑器
*   **UIManager Node Graph**: Features a dedicated layout tool (`editor.html`) powered by `EditorView.tsx`.
*   **WYSIWYG Scene Assembly**: Supports live visual hierarchy modification, property inspection (coordinate, dimensions, color scale), and single-click JSON export.
*   **内置层级编辑器**：配备基于 `editor.html` 与 `EditorView.tsx` 的可视化节点管理工具。支持组件实时添加、属性调节与一键导出场景 JSON。

### 4. Automated SPSA Tuning Pipe / 自动化 SPSA 调参
*   Includes a headless parallelized trainer (`spsa_trainer.ts`) spawning concurrent match workers to perform Simultaneous Perturbation Stochastic Approximation. Automatically optimizes piece-square tables (PST) and evaluations, directly saving results to `spsa_weights.json`.
*   **并发黑箱调参**：通过内置的训练脚本在本地常驻多核子进程，在静默态下进行自我对弈，获取梯度并迭代 `spsa_weights.json` 的权重数据。

---

## 📁 Developer Tools / 开发者工具链

*   `scripts/generate-protocol.ts`: Compiles atomic abilities and mappings from JSON schemas into matched C++ headers (`protocol.gen.h`) and TS files (`protocol.gen.ts`).
    *   `scripts/generate-protocol.ts`：将原子行为定义同步转译为 C++ 编译头文件与 TypeScript 映射协议，避免跨语言重构出现偏差。
*   `scripts/generate-atlas.ts`: Automates drawing, rendering-to-static-markup, and packaging of all React SVG icon nodes into a unified `atlas.svg` and UV map (`atlas.json`).
    *   `scripts/generate-atlas.ts`：通过服务端静态渲染，一键将数十个 React 图标组件无缝打包并拼合至高能 `atlas.svg` 图集及 UV 映射表。
*   `src/core/systems/ReplayService.ts`: Captures full game state changes and player actions into serialized, deterministic replay logs which can be exported and fully replayed.
    *   `src/core/systems/ReplayService.ts`：记录纯数据状态流，将玩家与 AI 所有的战术决策序列化为确定性的录像，支持本地导入重播。

---

## 🚀 Quick Start / 快速开始

### Prerequisites / 前提条件
*   Node.js (v18+)
*   Vite & Vitest
*   Emscripten SDK (Optional, required only for modifying and re-compiling C++ source code)

### Compilation & Development / 编译与运行
```bash
# 1. Install dependencies / 安装依赖
npm install

# 2. Compile C++ source directly to ES6 WASM module / 编译 C++ 逻辑至 ES6 模块
./scripts/build-wasm.bat

# 3. Compile the icon atlas / 烘焙静态图标图集
npx tsx scripts/generate-atlas.ts

# 4. Compile game schemas to static protocols / 同步原子编译协议
npx tsx scripts/generate-protocol.ts

# 5. Start the Vite development server / 运行本地服务器
npm run dev

# 6. Open UI Editor (Visual Design Mode) / 访问界面编辑器
# 浏览器访问 http://localhost:5173/editor.html

# 7. Run unit and logic tests via Vitest / 执行自动化测试
npm run test
```

### Build & Obfuscation / 混淆构建与部署
```bash
# Build, automatically obfuscate Javascript files (glue codes are safely skipped) and sync with target repo.
# 一键执行项目静态资源打包，通过批量混淆保护客户端计算资产，并无损增量同步至分发仓库。
./scripts/build-obfuscate.bat
```

---

## 📄 License / 许可证

Copyright © 2026 King's Reach Developers. All rights reserved.
See [Private License](./LICENSE) for details.

版权所有 © 2026 王权网络开发团队。保留所有权利。
详情请参阅 [私有许可证](./LICENSE)。