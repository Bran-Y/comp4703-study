# COMP4703 Study Studio

A bilingual English–Chinese revision website for COMP4703 Natural Language Processing. It organises the supplied lecture material and sample exams into short-answer questions, long-answer questions, and worked calculation exercises.

这是一个 COMP4703 自然语言处理双语复习网页，将课件与样卷知识整理为简答题、长答题和计算例题，方便按章节学习和自测。

## Run locally / 本地运行

You need Python 3.7 or newer and a modern browser. No packages need to be installed.

需要 Python 3.7 或更新版本以及现代浏览器，无需安装其他软件包。

```bash
git clone https://github.com/Bran-Y/comp4703-study.git
cd comp4703-study
chmod +x study.sh
./study.sh
```

The script starts a server on `http://127.0.0.1:8000/` and attempts to open your default browser. Press **Ctrl+C** in the terminal to stop it.

脚本会启动本地网页并尝试打开默认浏览器。在终端按 **Ctrl+C** 停止服务。

If port 8000 is already in use, choose another port. Add `--no-browser` to print the address without opening a browser.

如果 8000 端口被占用，可以换一个端口；添加 `--no-browser` 可只启动服务，不自动打开浏览器。

```bash
./study.sh 8001
./study.sh 8001 --no-browser
```

The server listens only on your own computer. Keep `study.sh` and the `dist` directory together when copying the project.

服务器只监听本机。复制项目时，请将 `study.sh` 与 `dist` 文件夹放在一起。

## Study features / 学习功能

- 164 short-answer questions and 36 long-answer questions, with English and Chinese question and answer text.
- 47 worked calculation or procedural examples, each with a bilingual practice exercise.
- Search by keyword, question ID, chapter, or review status; view formulas and use interactive calculation tools.
- Practise with a random self-test and mark questions as mastered, needing review, or starred.
- Check the sample-exam mappings and clarifications, with references to the source PDFs.

每道题的题干和参考答案都有中英对照。可以按知识点、题号和章节搜索，使用随机自测、收藏和复习标记，并在计算专区练习公式和步骤。

## Learning data / 学习记录

Progress, notes, and drafts are saved in the current browser's local storage. They do not automatically sync across browsers or devices. In **资料与勘误 → 学习记录**, you can export a JSON backup and import it later. A local address and a hosted address have separate browser storage.

学习进度、笔记和草稿保存在当前浏览器，不会自动跨设备同步。可在「资料与勘误 → 学习记录」导出或导入 JSON 备份。本地地址和在线地址的浏览器记录彼此独立。

## Source material / 资料来源

The questions are revision material based on the provided lectures and sample papers; they are not an official exam or a prediction of exam questions. The original lecture and exam PDF files are not included. Check the website's source and clarification section when an example depends on a specific convention or a sample answer appears inconsistent.

题库根据已提供的课件和样卷整理，用于复习，不是官方试卷或考题预测。项目不包含原始课件与试卷 PDF；具体来源和样卷中需要澄清的地方见网页「资料与勘误」。
