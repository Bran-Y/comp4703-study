window.STUDY_DATA = {
  "version": "2026-10-30-v2-bilingual",
  "sections": [
    {
      "code": "01",
      "title": "Language, linguistics and computational structure",
      "items": [
        {
          "id": "S01.01",
          "q": "How do linguistics and NLP differ in their primary goals?",
          "a": "Linguistics studies the structure and use of human language; NLP builds computational systems that process or generate it. They share methods, but an effective NLP application need not be a complete theory of human language.",
          "zh": "区分研究目标：解释语言 vs 解决工程任务；NLP 不等于只做机器学习。",
          "source": "W01 pp.26-46; W13 pp.4-5",
          "qZh": "语言学与自然语言处理的主要目标有什么不同？",
          "aZh": "语言学研究人类语言的结构与使用；自然语言处理（NLP）构建处理或生成语言的计算系统。二者共享一些方法，但有效的 NLP 应用不必构成完整的人类语言理论。"
        },
        {
          "id": "S01.02",
          "q": "Distinguish descriptive and prescriptive accounts of language.",
          "a": "A descriptive account explains how people actually use language, including dialect variation. A prescriptive account specifies how people ought to speak or write according to a chosen norm.",
          "zh": "非标准方言不等于没有语法；语法判断不等于社会偏好。",
          "source": "W01 pp.26-30",
          "qZh": "区分语言的描写性与规定性解释。",
          "aZh": "描写性解释说明人们实际上如何使用语言，包括不同方言的变化。规定性解释则按照某种选定规范，规定人们应该如何说或写。"
        },
        {
          "id": "S01.03",
          "q": "What is the competence/performance distinction?",
          "a": "Competence is an idealised speaker’s knowledge of the language system. Performance is actual language use, which is affected by memory, attention, errors and processing limits.",
          "zh": "会生成某种结构，不代表人能轻松处理任意长的结构。",
          "source": "W01 pp.30-42",
          "qZh": "什么是语言能力与语言运用的区别？",
          "aZh": "语言能力是理想化说话者对语言系统的知识。语言运用是实际使用语言的行为，会受到记忆、注意力、错误和处理能力限制的影响。"
        },
        {
          "id": "S01.04",
          "q": "How can a finite vocabulary generate infinitely many sentences?",
          "a": "Recursive rules can repeatedly embed or combine constituents. The set of grammatical strings is a subset of Σ*, even though the alphabet or vocabulary Σ is finite.",
          "zh": "有限词表 + 可递归规则 = 无界句子集合；不是无限词表。",
          "source": "W01 pp.31-34",
          "qZh": "有限词汇表如何生成无限多个句子？",
          "aZh": "递归规则可以反复嵌套或组合句法成分。因此，即使字母表或词汇表 Σ 是有限的，语法允许的字符串集合仍可作为 Σ* 的子集而具有无限大小。"
        },
        {
          "id": "S01.05",
          "q": "Name the four standard levels of the Chomsky hierarchy.",
          "a": "Regular languages are recognised by finite-state automata; context-free languages by pushdown automata; context-sensitive languages by linear-bounded automata; recursively enumerable languages by Turing machines. The classes are nested in that order.",
          "zh": "关键在表达能力与计算模型的对应；不必把每个自然语言问题都视为图灵机问题。",
          "source": "W01 pp.34-44",
          "qZh": "列出乔姆斯基层级的四个标准层次。",
          "aZh": "正则语言由有限状态自动机识别；上下文无关语言由下推自动机识别；上下文有关语言由线性有界自动机识别；递归可枚举语言由图灵机识别。这些类别按上述顺序逐层包含。"
        },
        {
          "id": "S01.06",
          "q": "Why does centre embedding challenge a finite-state account?",
          "a": "Unbounded matching dependencies, such as a^n b^n, require memory of an unbounded count and are not regular. A context-free grammar can express them, although human performance deteriorates as embedding depth grows.",
          "zh": "理论表达能力与人的工作记忆限制是两件事。",
          "source": "W01 pp.38-44",
          "qZh": "为什么中心嵌套给有限状态解释带来挑战？",
          "aZh": "像 a^n b^n 这样的无界匹配依赖，需要记住无界的计数，因此不是正则语言。上下文无关语法能表达这类结构，但随着嵌套层数增加，人类的实际处理表现会变差。"
        },
        {
          "id": "S01.07",
          "q": "Distinguish morphology, syntax, semantics and phonology.",
          "a": "Morphology concerns internal word structure; syntax concerns how words form larger structures; semantics concerns meaning; phonology concerns the sound system of a language.",
          "zh": "可各举一个例子：词缀、句法树、词义、音位。",
          "source": "W01 p.45",
          "qZh": "区分形态学、句法学、语义学和音系学。",
          "aZh": "形态学研究词的内部结构；句法学研究词如何构成更大的结构；语义学研究意义；音系学研究一种语言的语音系统。"
        },
        {
          "id": "S01.08",
          "q": "Why is natural language difficult to process computationally?",
          "a": "The same form may have several meanings or structures, and interpretation depends on context and world knowledge. Language is also diverse, productive and sensitive to domain and dialect.",
          "zh": "回答至少两个机制，不只说“语言复杂”：歧义、上下文、常识、变化。",
          "source": "W01 pp.49-53",
          "qZh": "为什么自然语言难以通过计算方式处理？",
          "aZh": "同一种形式可能具有多种意义或结构，而理解依赖上下文和世界知识。语言还具有多样性和能产性，并受领域及方言变化影响。"
        },
        {
          "id": "S01.09",
          "q": "Give two non-neural methods used in NLP.",
          "a": "Finite-state morphological analysis and rule-based parsing are examples. Lexical resources such as WordNet also encode useful linguistic knowledge without being neural models.",
          "zh": "历史路线：规则、统计、深度学习并存，不是新方法完全取代旧方法。",
          "source": "W01 pp.49-67",
          "qZh": "举出两种 NLP 中使用的非神经方法。",
          "aZh": "例如有限状态形态分析和基于规则的句法分析。WordNet 等词汇资源也能编码有用的语言知识，而不属于神经模型。"
        }
      ],
      "titleZh": "语言、语言学与计算结构"
    },
    {
      "code": "02",
      "title": "Language models, estimation and evaluation",
      "items": [
        {
          "id": "S02.01",
          "q": "What does a language model estimate?",
          "a": "It estimates probabilities of token sequences, usually by predicting each next token given its preceding context. The chain rule turns these conditional probabilities into a sequence probability.",
          "zh": "说清 joint probability 与 next-token conditional 的关系。",
          "source": "W02 pp.4-8; E25 Q1; E24 Q1",
          "qZh": "语言模型估计什么？",
          "aZh": "语言模型估计 token 序列的概率，通常通过根据前文预测下一个 token 来实现。概率链式法则把这些条件概率组合成整个序列的概率。"
        },
        {
          "id": "S02.02",
          "q": "What assumption distinguishes an n-gram model from the full chain rule?",
          "a": "An n-gram model approximates the next-token distribution using only the previous n-1 tokens. The chain rule itself is exact; the limited-context Markov assumption is the approximation.",
          "zh": "不要把概率链式法则说成近似；近似发生在截断历史。",
          "source": "W02 pp.9-14",
          "qZh": "n-gram 模型与完整链式法则之间的关键假设区别是什么？",
          "aZh": "n-gram 模型只使用前 n−1 个 token 来近似下一个 token 的分布。链式法则本身是精确的；近似来自限制上下文长度的马尔可夫假设。"
        },
        {
          "id": "S02.03",
          "q": "Why is a unigram language model weak at contextual prediction?",
          "a": "It assigns each token the same probability regardless of the preceding words. It therefore cannot model word order or context-dependent choices.",
          "zh": "unigram 不是只预测一个词，而是不使用历史上下文。",
          "source": "W02 pp.10-14; E25 Q2",
          "qZh": "为什么 unigram 语言模型的上下文预测能力弱？",
          "aZh": "无论前面出现什么词，它都会给同一个 token 分配相同概率。因此，它不能建模词序或依赖上下文的选择。"
        },
        {
          "id": "S02.04",
          "q": "What is maximum-likelihood estimation for a bigram?",
          "a": "P(w|h) = C(h,w)/C(h), using the count of the history followed by the word divided by the count of that history. Sentence boundaries must be handled consistently.",
          "zh": "分母是历史 h 的计数，不是全语料的词数。",
          "source": "W02 pp.16-21",
          "qZh": "二元语言模型的最大似然估计是什么？",
          "aZh": "P(w∣h)=C(h,w)/C(h)，即“历史 h 后面出现词 w”的次数除以该历史的出现次数。句子起止边界必须采用一致的处理约定。"
        },
        {
          "id": "S02.05",
          "q": "Why do n-grams become sparse as n grows?",
          "a": "There are up to |V|^n possible n-grams, but a finite corpus observes only a small fraction. The vocabulary does not itself grow exponentially with n; the space of possible sequences does.",
          "zh": "修正旧答案措辞：指数增长的是组合空间。",
          "source": "W02 pp.50-55; E24 Q3",
          "qZh": "为什么 n 增大时 n-gram 会变得稀疏？",
          "aZh": "可能的 n-gram 最多有 |V|^n 个，但有限语料只能观察到其中很小一部分。随 n 指数增长的是可能序列的组合空间，而不是词汇表本身。"
        },
        {
          "id": "S02.06",
          "q": "Why compute sequence scores in log space?",
          "a": "A product of many small probabilities can underflow numerically. Summing their logarithms is more stable and preserves ranking because the logarithm is monotonic.",
          "zh": "积变和；log probability 通常为负，越接近 0 越大。",
          "source": "W02 p.23; W11 p.8",
          "qZh": "为什么要在对数空间计算序列得分？",
          "aZh": "许多小概率相乘可能导致数值下溢。将其改为对数之和更稳定，而且对数函数单调，因此不会改变得分排序。"
        },
        {
          "id": "S02.07",
          "q": "What does smoothing do, and what is a weakness of add-one smoothing?",
          "a": "Smoothing reallocates probability mass to unseen events. Add-one smoothing adds one pseudo-count to every possible continuation, which can move too much mass away from observed events in a large vocabulary.",
          "zh": "必须同时改分子和分母；不能只给零计数加 1。",
          "source": "W02 pp.55-67",
          "qZh": "平滑起什么作用？加一平滑有什么弱点？",
          "aZh": "平滑把一部分概率质量重新分配给未观察到的事件。加一平滑为每个可能的后续 token 加一个伪计数；词汇表很大时，这可能从已观察事件中移走过多概率质量。"
        },
        {
          "id": "S02.08",
          "q": "How do backoff and interpolation differ?",
          "a": "Backoff falls back to a lower-order model when the higher-order evidence is insufficient. Interpolation combines distributions from multiple orders using non-negative weights that sum to one.",
          "zh": "backoff 是回退；interpolation 是加权混合。",
          "source": "W02 pp.69-71; E25 Q3",
          "qZh": "回退和平滑插值有什么不同？",
          "aZh": "回退在高阶模型证据不足时使用低阶模型。插值则使用非负且总和为 1 的权重，将多个阶数的概率分布混合起来。"
        },
        {
          "id": "S02.09",
          "q": "Is stupid backoff a normalised probability model?",
          "a": "No. It uses observed relative frequencies when available and otherwise multiplies a lower-order score by a fixed factor, commonly 0.4. The resulting scores need not sum to one.",
          "zh": "不要直接把未归一化 backoff score 当概率计算可比较的 perplexity。",
          "source": "W02 pp.74-75",
          "qZh": "Stupid backoff 是归一化的概率模型吗？",
          "aZh": "不是。它在有观察计数时使用相对频率，否则将低阶得分乘以一个固定系数，常用值为 0.4。最终得分之和不一定为 1。"
        },
        {
          "id": "S02.10",
          "q": "How are unknown words handled, and what does a cache model add?",
          "a": "An <UNK> token can represent rare or unseen words when the vocabulary is fixed. A cache model interpolates the base model with frequencies in recent context to capture local repetition or topic adaptation.",
          "zh": "UNK 解决词表外输入；cache 利用近期主题，不是同一种机制。",
          "source": "W02 pp.72,77",
          "qZh": "如何处理未知词？缓存语言模型增加了什么能力？",
          "aZh": "固定词汇表时，可以用 <UNK> 表示稀有词或未见词。缓存模型将基础模型与近期上下文的词频分布插值，以捕捉局部重复和主题适应。"
        },
        {
          "id": "S02.11",
          "q": "What is perplexity, and when is a comparison meaningful?",
          "a": "Perplexity is the inverse geometric mean probability assigned to the observed test tokens. Lower is better for predictive likelihood when the test set, tokenisation and scoring conventions are held fixed; it need not imply better downstream utility.",
          "zh": "不能直接比较不同分词粒度的 PP；PP 不等于生成文本真实性。",
          "source": "W02 pp.28-41; E25 Q4",
          "qZh": "什么是困惑度？什么时候比较困惑度才有意义？",
          "aZh": "困惑度是模型赋给测试集中实际出现 token 的概率的几何平均值之倒数。在测试集、分词方法和计分约定相同的情况下，困惑度越低说明预测似然越好；但不一定意味着下游任务更有用。"
        },
        {
          "id": "S02.12",
          "q": "Why separate training, development and test sets?",
          "a": "Training fits parameters, development selects hyperparameters or design choices, and the held-out test set estimates generalisation. Repeated tuning on the test set or overlapping examples leaks information and makes the final estimate optimistic.",
          "zh": "train 学参数；dev 调方案；test 最终评价。",
          "source": "W02 pp.30-33; W08 pp.26-29",
          "qZh": "为什么要区分训练集、开发集和测试集？",
          "aZh": "训练集用于拟合参数，开发集用于选择超参数或设计方案，留出的测试集用于估计泛化表现。反复在测试集上调参或使用重叠样本会泄漏信息，使最终估计过于乐观。"
        },
        {
          "id": "S02.13",
          "q": "How can very large n-gram models be made more practical?",
          "a": "Pruning low-value entries, compact trie-like storage, integer word IDs and quantised values reduce memory and lookup costs. These engineering changes do not remove the underlying sparsity or limited-context assumptions.",
          "zh": "扩展知识：区分存储工程优化与建模能力提升。",
          "source": "W02 pp.73-77",
          "qZh": "如何让超大型 n-gram 模型更实用？",
          "aZh": "剪掉价值较低的条目、使用紧凑的 trie 类存储、整数词 ID 和量化数值，都能降低内存与查询开销。但这些工程优化不能消除模型本身的稀疏性或有限上下文假设。"
        }
      ],
      "titleZh": "语言模型、估计与评价"
    },
    {
      "code": "03",
      "title": "POS tagging, HMMs and named entities",
      "items": [
        {
          "id": "S03.01",
          "q": "What are POS tagging and named entity recognition?",
          "a": "POS tagging assigns grammatical categories to tokens. NER identifies entity spans and their types, such as person, organisation and location.",
          "zh": "NER 不只是给每个词分类，还要找实体边界。",
          "source": "W03 pp.12-21,89-94; E25 Q5-8",
          "qZh": "什么是词性标注和命名实体识别？",
          "aZh": "词性标注为每个 token 分配语法类别。命名实体识别（NER）找出实体的跨度及类型，例如人物、组织和地点。"
        },
        {
          "id": "S03.02",
          "q": "What are open and closed word classes?",
          "a": "Open classes, such as nouns and verbs, readily accept new members. Closed classes, such as determiners and pronouns, have more restricted membership and largely grammatical functions.",
          "zh": "开放类多为实词；封闭类多为功能词，但仍需看具体语言。",
          "source": "W03 pp.16-20",
          "qZh": "什么是开放词类和封闭词类？",
          "aZh": "开放词类容易接纳新成员，例如名词和动词。封闭词类的成员较受限制，主要承担语法功能，例如限定词和代词。"
        },
        {
          "id": "S03.03",
          "q": "Why is POS tagging context-dependent?",
          "a": "The same word can take different grammatical roles: “can” may be a noun, a lexical verb or an auxiliary. The surrounding words constrain which interpretation is appropriate.",
          "zh": "例如 “We can fish”：不能只查词典的唯一词性。",
          "source": "W03 pp.21-25",
          "qZh": "为什么词性标注依赖上下文？",
          "aZh": "同一个词可以承担不同的语法角色，例如 can 可以是名词、实义动词或助动词。周围的词会约束哪种解释更合适。"
        },
        {
          "id": "S03.04",
          "q": "What are the hidden states and observations in an HMM tagger?",
          "a": "The hidden states are POS tags, and the observations are words. The model uses initial-state probabilities, transitions between tags, and word-emission probabilities conditioned on tags.",
          "zh": "transition: P(tag_i | tag_{i-1}); emission: P(word_i | tag_i)。",
          "source": "W03 pp.37-55; E24 Q5",
          "qZh": "HMM 词性标注器中的隐藏状态和观察量分别是什么？",
          "aZh": "隐藏状态是词性标签，观察量是单词。模型包括初始状态概率、标签之间的转移概率，以及给定标签时产生单词的发射概率。"
        },
        {
          "id": "S03.05",
          "q": "State the main independence assumptions of a first-order HMM.",
          "a": "The current state depends only on the preceding state. Given its current state, an observation is independent of the other states and observations.",
          "zh": "不要把 hidden state 和 observed word 的条件方向写反。",
          "source": "W03 pp.37-62",
          "qZh": "说明一阶 HMM 的主要独立性假设。",
          "aZh": "当前状态只依赖前一个状态。在给定当前状态后，当前观察量与其他状态和观察量条件独立。"
        },
        {
          "id": "S03.06",
          "q": "Why can the denominator be dropped when finding the most probable tag sequence?",
          "a": "By Bayes’ rule, P(tags|words) is proportional to P(words|tags)P(tags). For a fixed observed sentence, P(words) is the same for every candidate tag sequence and does not affect the argmax.",
          "zh": "只对固定 words 的候选 tags 排序时可省略，不是分母不存在。",
          "source": "W03 pp.57-62",
          "qZh": "寻找最可能标签序列时，为什么可以省略贝叶斯公式的分母？",
          "aZh": "根据贝叶斯公式，P(tags∣words) 与 P(words∣tags)P(tags) 成正比。对一个固定句子，P(words) 对所有候选标签序列都相同，所以不影响 argmax。"
        },
        {
          "id": "S03.07",
          "q": "What does the Viterbi algorithm compute?",
          "a": "Viterbi finds the highest-probability state path using dynamic programming and backpointers. For T observations and K states, a dense first-order implementation takes O(TK²), rather than enumerating K^T paths.",
          "zh": "每格保存最佳前驱；最后回溯，不是每个位置独立选最大标签。",
          "source": "W03 pp.68-83",
          "qZh": "Viterbi 算法计算什么？",
          "aZh": "Viterbi 使用动态规划和回溯指针，寻找概率最高的状态路径。对 T 个观察量和 K 个状态，稠密一阶实现的复杂度为 O(TK²)，而不是枚举全部 K^T 条路径。"
        },
        {
          "id": "S03.08",
          "q": "Why is a most-frequent-tag baseline useful?",
          "a": "It provides a simple reference that exploits common lexical patterns and exposes whether a more complex model genuinely improves. Strong overall accuracy may still conceal difficult unknown words or ambiguous tokens.",
          "zh": "baseline 高分不代表问题解决；看错误类型与少数情况。",
          "source": "W03 p.88",
          "qZh": "为什么“最常见词性”基线有用？",
          "aZh": "它提供一个利用常见词汇规律的简单参照，帮助判断更复杂模型是否真正改进。即使总体准确率很高，也可能掩盖未知词或歧义词等困难情况。"
        },
        {
          "id": "S03.09",
          "q": "What do B, I and O mean in BIO tagging?",
          "a": "B marks the beginning of an entity, I marks a subsequent token inside that entity, and O marks a token outside entities. Entity types are attached to B and I; K types give 2K+1 labels.",
          "zh": "相邻两个同类实体也应各自从 B 开始；单词实体只用 B。",
          "source": "W03 pp.89-94; E24 Q9",
          "qZh": "BIO 标注中的 B、I、O 分别表示什么？",
          "aZh": "B 表示实体的起始 token，I 表示同一实体内部的后续 token，O 表示实体之外的 token。B 和 I 还附带实体类型；K 种实体类型共有 2K+1 个标签。"
        },
        {
          "id": "S03.10",
          "q": "How can a gazetteer help NER, and why is it insufficient alone?",
          "a": "A gazetteer lists known entities or aliases and provides useful matching features or high-precision candidates. It is incomplete, becomes stale and cannot resolve every contextual ambiguity, such as “Apple” as a company or fruit.",
          "zh": "名单辅助识别，不保证新实体、变体、歧义全解决。",
          "source": "W03 pp.89-94; E24 Q7-8",
          "qZh": "实体名录如何帮助 NER？为什么单独使用它不够？",
          "aZh": "实体名录列出已知实体及别名，可提供匹配特征或高精度候选。但是名录不完整、会过时，也无法解决所有上下文歧义，例如 Apple 指公司还是水果。"
        },
        {
          "id": "S03.11",
          "q": "Name two difficulties in NER and two model families used for it.",
          "a": "Entity boundaries and context-dependent types are difficult, especially for unseen names and domain shift. HMM/CRF sequence models and neural encoders such as recurrent or BERT-based models are common approaches.",
          "zh": "课件提到 CRF，但没有要求在此背完整 CRF 推导。",
          "source": "W03 pp.92-94; E25 Q8",
          "qZh": "列出 NER 的两项难点及两类可用模型。",
          "aZh": "实体边界和依赖上下文的类型判断都很困难，未见名称和领域变化会加剧问题。常见方法包括 HMM/CRF 序列模型，以及循环网络或 BERT 等神经编码器。"
        }
      ],
      "titleZh": "词性标注、HMM 与命名实体"
    },
    {
      "code": "04",
      "title": "Syntax, parsing and information extraction",
      "items": [
        {
          "id": "S04.01",
          "q": "What is a constituent, and how does chunking differ from full parsing?",
          "a": "A constituent is a group of words behaving as a syntactic unit. Chunking finds shallow, usually non-overlapping phrases, whereas full parsing represents nested sentence structure.",
          "zh": "chunk 常是平面短语；parse 表示递归结构。",
          "source": "W04 pp.9-26; E25 Q9-10",
          "qZh": "什么是句法成分？浅层分块与完整句法分析有何不同？",
          "aZh": "句法成分是一组整体承担某种句法功能的词。浅层分块识别较浅、通常互不重叠的短语；完整句法分析则表示句子中的嵌套结构。"
        },
        {
          "id": "S04.02",
          "q": "What are the components of a context-free grammar?",
          "a": "A CFG contains terminals, non-terminals, production rules and a start symbol. Each rule rewrites one non-terminal independently of its surrounding context.",
          "zh": "终结符是实际输入词；非终结符例如 NP、VP、S。",
          "source": "W04 pp.24-25",
          "qZh": "上下文无关语法包含哪些组成部分？",
          "aZh": "CFG 包含终结符、非终结符、产生式规则和起始符号。每条规则改写一个非终结符，不依赖其周围的上下文。"
        },
        {
          "id": "S04.03",
          "q": "Contrast top-down and bottom-up parsing.",
          "a": "Top-down parsing expands from the start symbol and uses grammatical expectations, but may explore predictions unsupported by the input. Bottom-up parsing builds from observed words, but may construct constituents that cannot form a complete sentence.",
          "zh": "两者各有约束与浪费；不要写成谁绝对更好。",
          "source": "W04 pp.29-30",
          "qZh": "比较自顶向下与自底向上的句法分析。",
          "aZh": "自顶向下方法从起始符号展开，利用语法预期，但可能探索与实际输入不符的预测。自底向上方法从已观察到的词构造结构，但可能构建无法组成完整句子的成分。"
        },
        {
          "id": "S04.04",
          "q": "Why are chart parsing algorithms efficient?",
          "a": "They cache analyses of spans or parser states and reuse them when those subproblems recur. This avoids repeatedly recomputing the same partial structure.",
          "zh": "核心是 dynamic programming 的共享子问题。",
          "source": "W04 pp.31-63",
          "qZh": "为什么 chart parsing 较高效？",
          "aZh": "它缓存词跨度或分析状态的结果，在相同子问题再次出现时复用。这避免了反复计算同样的部分结构。"
        },
        {
          "id": "S04.05",
          "q": "What form of grammar does standard CKY use?",
          "a": "Standard CKY uses Chomsky normal form: A -> B C or A -> word, with special handling if the empty string is allowed. Grammars containing other unary rules need conversion or explicit unary closure.",
          "zh": "课件演示含简化 unary rule；严格 CNF 和实现扩展要分清。",
          "source": "W04 pp.31-34",
          "qZh": "标准 CKY 使用什么形式的语法？",
          "aZh": "标准 CKY 使用乔姆斯基范式：A→BC 或 A→word；如果允许空串，需要特殊处理。存在其他一元规则时，需要先转换语法或显式计算一元闭包。"
        },
        {
          "id": "S04.06",
          "q": "Name the three operations of Earley parsing.",
          "a": "Prediction adds rules for an expected non-terminal; scanning advances over a matching input token; completion advances states waiting for a recognised constituent. A dotted rule records how much has been recognised and where the constituent began.",
          "zh": "成功条件是从 0 到 n 的完整 S，而不是仅识别出某个前缀。",
          "source": "W04 pp.35-63",
          "qZh": "列出 Earley 分析的三种操作。",
          "aZh": "预测为预期中的非终结符加入规则；扫描在匹配输入 token 后推进状态；完成操作推进那些等待已识别成分的状态。带点规则记录已经识别了多少内容，以及成分从哪里开始。"
        },
        {
          "id": "S04.07",
          "q": "How does a dependency tree differ from a constituency tree?",
          "a": "A dependency tree links words through head-dependent relations, typically with one root. A constituency tree groups words into nested phrases such as NP and VP.",
          "zh": "画依存树前说明箭头方向、root 和采用的标注体系。",
          "source": "W04 pp.64-71; E25 Q11",
          "qZh": "依存树与成分树有什么不同？",
          "aZh": "依存树通过中心词—依存词关系连接单词，通常有一个根节点。成分树则把词组织为 NP、VP 等嵌套短语。"
        },
        {
          "id": "S04.08",
          "q": "Distinguish a syntactic subject from an agent.",
          "a": "A subject is a grammatical relation; an agent is a semantic role associated with the doer of an event. In “B was acquired by A”, B is the subject but A is the acquiring agent.",
          "zh": "主动和被动转换会改变句法位置，不一定改变事件角色。",
          "source": "W04 pp.18-20,86-95",
          "qZh": "区分句法主语与施事。",
          "aZh": "主语是一种语法关系；施事是与事件执行者对应的语义角色。在“B was acquired by A”中，B 是主语，但 A 是实施收购的施事。"
        },
        {
          "id": "S04.09",
          "q": "Give two sources of syntactic ambiguity.",
          "a": "PP attachment can make “with a telescope” modify either the seeing event or a noun. Coordination ambiguity arises in expressions such as “old men and women”, where “old” may modify one or both groups.",
          "zh": "同样词序有多棵树；语法可列出分析，但语境帮助选择。",
          "source": "W04 pp.73-80",
          "qZh": "举出两种句法歧义来源。",
          "aZh": "介词短语附着歧义会让“with a telescope”既可能修饰“看”的动作，也可能修饰某个名词。并列歧义如“old men and women”中，old 可能只修饰男人，也可能修饰两组人。"
        },
        {
          "id": "S04.10",
          "q": "What is a garden-path sentence?",
          "a": "It initially encourages a plausible but incorrect parse, forcing reanalysis later. This illustrates a difference between grammatical possibility and incremental human processing difficulty.",
          "zh": "不要把难读自动判为不合语法。",
          "source": "W04 pp.79-84",
          "qZh": "什么是花园路径句？",
          "aZh": "这类句子起初诱导读者采用合理但错误的句法分析，之后迫使其重新分析。它说明语法上是否可能，与人类增量处理时是否困难，是不同问题。"
        },
        {
          "id": "S04.11",
          "q": "How can parsing support relation extraction?",
          "a": "Parsing exposes grammatical relations that help identify event participants, while NER supplies entity spans and types. Voice, lexical variation and context must still be handled to map sentences to a consistent relation such as acquire(buyer,target).",
          "zh": "简单关键词 + 固定词序规则会在被动语态、同义词处失败。",
          "source": "W04 pp.86-95",
          "qZh": "句法分析如何支持关系抽取？",
          "aZh": "句法分析提供语法关系，以帮助识别事件参与者；NER 提供实体跨度和类型。但仍需处理语态、词汇变化和上下文，才能把句子映射成 acquire(buyer,target) 等一致的关系表示。"
        },
        {
          "id": "S04.12",
          "q": "What is a treebank, and is it automatically a semantic-parser training set?",
          "a": "A treebank is a corpus annotated with syntactic trees, sometimes with additional semantic annotation. Syntactic supervision can help semantic parsing, but plain syntactic trees are not the same as paired executable logical forms.",
          "zh": "避免把 syntax tree 和 logical form 混为一谈。",
          "source": "W04 pp.64-80; W11 pp.73-83; E24 Q12",
          "qZh": "什么是树库？它是否自动构成语义分析训练集？",
          "aZh": "树库是带有句法树标注的语料，有时还包含额外语义标注。句法监督可以帮助语义分析，但纯句法树并不等同于与句子配对的可执行逻辑形式。"
        }
      ],
      "titleZh": "句法、分析算法与信息抽取"
    },
    {
      "code": "05",
      "title": "Neural networks, backpropagation and training",
      "items": [
        {
          "id": "S05.01",
          "q": "What does a perceptron compute?",
          "a": "It computes a weighted sum of inputs plus a bias and applies a threshold decision. Its decision boundary is linear in the original input space.",
          "zh": "偏置可以用恒为 1 的额外输入来表示。",
          "source": "W05 pp.21-41",
          "qZh": "感知机计算什么？",
          "aZh": "它计算输入的加权和再加上偏置，然后通过阈值作出判断。其决策边界在原始输入空间中是线性的。"
        },
        {
          "id": "S05.02",
          "q": "Why can one perceptron not represent XOR?",
          "a": "The positive XOR examples cannot be separated from the negative examples by one straight line. Nonlinear hidden units can construct an intermediate representation in which the classes become separable.",
          "zh": "需要的是非线性组合；堆叠纯线性层仍然是线性函数。",
          "source": "W05 pp.30-50; E25 Q14",
          "qZh": "为什么单个感知机不能表示异或 XOR？",
          "aZh": "XOR 的正例和负例无法用一条直线分开。非线性隐藏单元可以构造中间表示，使这些类别在新表示空间中变得可分。"
        },
        {
          "id": "S05.03",
          "q": "What is the distinction between parameters and hyperparameters?",
          "a": "Parameters, such as weights and biases, are fitted by training. Hyperparameters, such as learning rate, hidden size and regularisation strength, control the model or training procedure and are normally selected using development data.",
          "zh": "不在 test set 上选择 learning rate 或最佳配置。",
          "source": "W05 pp.110-124",
          "qZh": "参数和超参数有什么区别？",
          "aZh": "权重和偏置等参数通过训练拟合。学习率、隐藏层大小和正则化强度等超参数控制模型或训练过程，通常通过开发集选择。"
        },
        {
          "id": "S05.04",
          "q": "What does softmax do?",
          "a": "Softmax maps logits z_i to exp(z_i)/Σ_j exp(z_j), producing non-negative values summing to one. Subtracting the maximum logit before exponentiating improves numerical stability without changing the probabilities.",
          "zh": "softmax 输出概率分布；本身不是采样，也不是损失函数。",
          "source": "W05 pp.125-138; E24 Q14",
          "qZh": "Softmax 起什么作用？",
          "aZh": "Softmax 将 logit z_i 映射为 exp(z_i)/Σ_j exp(z_j)，得到非负且总和为 1 的数值。求指数前先减去最大的 logit，可以提高数值稳定性而不改变概率。"
        },
        {
          "id": "S05.05",
          "q": "What is backpropagation, precisely?",
          "a": "Backpropagation is reverse-mode automatic differentiation on a computational graph. It reuses intermediate derivatives and accumulates contributions from all downstream paths to obtain gradients efficiently; an optimiser then uses those gradients to update parameters.",
          "zh": "重点：链式法则 + 动态规划；计算梯度与更新参数应分开说。",
          "source": "W05 pp.53-93; W13 p.10; E24 Q15-16",
          "qZh": "准确地说，什么是反向传播？",
          "aZh": "反向传播是在计算图上进行的反向模式自动微分。它复用中间导数，并累加所有下游路径的贡献，以高效计算梯度；随后由优化器使用梯度更新参数。"
        },
        {
          "id": "S05.06",
          "q": "Why do gradients from branching paths add?",
          "a": "A variable can influence the output through several downstream uses. The multivariate chain rule sums the derivative contribution of each use, so overwriting one contribution would omit a dependency.",
          "zh": "共享节点要累加 adjoint，不能只保留一条路径。",
          "source": "W05 pp.66-89",
          "qZh": "为什么分支路径的梯度要相加？",
          "aZh": "一个变量可能通过多个下游用途影响输出。多元链式法则要求将每种用途产生的导数贡献求和；如果覆盖其中一个贡献，就会遗漏一条依赖关系。"
        },
        {
          "id": "S05.07",
          "q": "Why is backpropagation not simply symbolic differentiation?",
          "a": "It differentiates a realised computation using cached intermediate values and graph structure. This can handle repeated subcomputations and program control flow efficiently without expanding a large symbolic expression.",
          "zh": "可以理解为程序上的 reverse-mode AD，不是展开所有路径逐条算。",
          "source": "W05 pp.80-93",
          "qZh": "为什么反向传播不只是符号求导？",
          "aZh": "它利用缓存的中间数值和计算图结构，对一次实际执行的计算求导。因此能够高效处理重复子计算和程序控制流，而不必展开巨大的符号表达式。"
        },
        {
          "id": "S05.08",
          "q": "What causes vanishing or exploding gradients?",
          "a": "Repeated multiplication by small or large Jacobian factors can shrink or amplify gradients across depth or time. Suitable initialisation, residual paths, non-saturating activations and, for explosion, gradient clipping can help, but none is a universal guarantee.",
          "zh": "sigmoid/tanh 饱和会使导数很小；不要说 ReLU 保证永不消失。",
          "source": "W05 pp.99-105; W09 pp.59-62; E24 Q17",
          "qZh": "什么导致梯度消失或爆炸？",
          "aZh": "在深度或时间维度上，反复乘以较小或较大的雅可比因子，会使梯度缩小或放大。合适的初始化、残差路径和非饱和激活函数能提供帮助；梯度裁剪可缓解爆炸，但没有任何一种方法能普遍保证解决问题。"
        },
        {
          "id": "S05.09",
          "q": "Compare ReLU and sigmoid.",
          "a": "ReLU is max(0,z) and has a non-saturating positive branch, helping gradient flow and giving sparse activations. Sigmoid maps to (0,1) but saturates at both extremes; ReLU can instead suffer from inactive units with persistently negative inputs.",
          "zh": "写优点也写代价：ReLU 有 dead units，sigmoid 仍适合二分类概率输出。",
          "source": "W05 pp.99-100; E25 Q12",
          "qZh": "比较 ReLU 与 sigmoid。",
          "aZh": "ReLU 为 max(0,z)，其正半轴不饱和，有助于梯度传播，并产生稀疏激活。Sigmoid 将输入映射到 (0,1)，但两端会饱和；ReLU 则可能因输入长期为负而产生失活单元。"
        },
        {
          "id": "S05.10",
          "q": "How do mini-batches change optimisation?",
          "a": "They estimate a gradient from a subset of training examples, balancing noisy frequent updates with efficient parallel computation. Full-batch gradients are more stable but expensive per update, while single-example updates are noisier.",
          "zh": "区分每次更新的成本、估计噪声和硬件利用率。",
          "source": "W05 pp.95-98",
          "qZh": "小批量训练如何改变优化过程？",
          "aZh": "它用一部分训练样本估计梯度，在频繁但有噪声的更新与高效并行计算之间取得平衡。全批量梯度更稳定，但每次更新昂贵；单样本更新的噪声更大。"
        },
        {
          "id": "S05.11",
          "q": "How do L2 regularisation and dropout discourage overfitting?",
          "a": "L2 adds a penalty on large weights. Dropout randomly suppresses activations during training, reducing co-adaptation; inference uses the corresponding deterministic scaling convention.",
          "zh": "inverted dropout 训练时缩放，测试时通常关闭；不是删掉固定神经元。",
          "source": "W05 pp.101-102; E25 Q13; E24 Q27",
          "qZh": "L2 正则化和 dropout 如何抑制过拟合？",
          "aZh": "L2 对较大权重增加惩罚。Dropout 在训练时随机屏蔽激活值，减少单元之间的共适应；推理时使用与训练约定对应的确定性缩放方式。"
        },
        {
          "id": "S05.12",
          "q": "Why use random initialisation and normalisation?",
          "a": "Random initialisation breaks symmetry between units, and suitable scale avoids unstable activations or gradients. Normalisation controls representation scale during training, but does not replace the need for careful optimisation.",
          "zh": "随机性 + 合理方差；全零初始化隐藏层会使同层单元学到相同东西。",
          "source": "W05 pp.104-105",
          "qZh": "为什么使用随机初始化和归一化？",
          "aZh": "随机初始化打破不同单元之间的对称性，合适的尺度避免激活值或梯度不稳定。归一化在训练期间控制表示的尺度，但不能代替谨慎选择优化策略。"
        },
        {
          "id": "S05.13",
          "q": "Distinguish AdaGrad, Adam and checkpoint averaging at a high level.",
          "a": "AdaGrad scales updates using accumulated squared gradients; Adam uses exponential moving averages of first and second gradient moments. Checkpoint averaging combines parameter snapshots rather than changing the local gradient formula.",
          "zh": "W05 p.98 的累积平方公式更像 AdaGrad；不要把它背成完整 Adam。",
          "source": "W05 pp.98,103; extension clarification",
          "qZh": "概括 AdaGrad、Adam 和检查点平均的区别。",
          "aZh": "AdaGrad 使用累积的梯度平方来缩放更新；Adam 使用梯度一阶矩与二阶矩的指数移动平均。检查点平均组合多个时刻的参数快照，而不是改变局部梯度公式。"
        }
      ],
      "titleZh": "神经网络、反向传播与训练"
    },
    {
      "code": "06",
      "title": "Lexical semantics and word representations",
      "items": [
        {
          "id": "S06.01",
          "q": "Distinguish tokens, word types, lemmas and senses.",
          "a": "A token is one occurrence; a type is a distinct form; a lemma groups inflected forms; a sense is a particular meaning. Multiword expressions may function as lexical units despite containing several tokens.",
          "zh": "一词多义、屈折变化、出现次数是不同维度。",
          "source": "W06 pp.9-18",
          "qZh": "区分 token、词型、词元和词义。",
          "aZh": "Token 是一次具体出现；词型是不同的表面形式；词元把屈折变化形式归为一组；词义是一个具体含义。多词表达虽然包含多个 token，也可能作为一个词汇单位发挥作用。"
        },
        {
          "id": "S06.02",
          "q": "Distinguish homonymy, polysemy and metonymy.",
          "a": "Homonymy involves unrelated meanings sharing a form; polysemy involves related senses of one lexical item. Metonymy uses a related entity to refer to another, as when a building name denotes its institution.",
          "zh": "bank 的不同意义需要看是否语义相关；metonymy 是关联替代。",
          "source": "W06 pp.12-21",
          "qZh": "区分同形异义、多义和转喻。",
          "aZh": "同形异义指无关的意义共享同一种形式；多义指同一词项具有相关的不同词义。转喻用相关实体指代另一实体，例如用建筑名称指代其中的机构。"
        },
        {
          "id": "S06.03",
          "q": "How do synonymy, antonymy and hyponymy differ?",
          "a": "Synonyms have similar meanings in a given sense; antonyms contrast along a shared dimension; hyponymy is a type-of relation, such as dog being a hyponym of animal. Synonyms need not be interchangeable in every context.",
          "zh": "相似语境也可能产生反义词，所以 embedding 接近不等于同义。",
          "source": "W06 pp.21-28",
          "qZh": "同义、反义和下义关系有什么不同？",
          "aZh": "同义词在某个词义下意义相近；反义词沿某个共同维度相对；下义关系是“是一种”的关系，例如狗是动物的下义词。同义词并非在所有上下文中都能互换。"
        },
        {
          "id": "S06.04",
          "q": "What does WordNet represent?",
          "a": "WordNet groups lexical senses into synsets with glosses and semantic relations such as hypernymy. It is a curated lexical resource, rather than simply a table of corpus co-occurrence counts.",
          "zh": "synset 是义项层面的同义集合，不是所有同形词合在一起。",
          "source": "W06 pp.27-28",
          "qZh": "WordNet 表示什么？",
          "aZh": "WordNet 把词义组织为同义词集（synsets），附有释义以及上义关系等语义关系。它是人工整理的词汇资源，而不只是语料共现计数表。"
        },
        {
          "id": "S06.05",
          "q": "State the distributional hypothesis.",
          "a": "Words occurring in similar contexts tend to have related meanings. Distributional representations encode patterns of use, which can reflect both useful semantics and unwanted social associations.",
          "zh": "“You shall know a word by the company it keeps.” 重点是语境分布。",
          "source": "W06 pp.30-46",
          "qZh": "说明分布式假设。",
          "aZh": "出现在相似上下文中的词通常具有相关意义。分布式表示编码语言使用模式，因此既可能反映有用语义，也可能反映不希望保留的社会关联。"
        },
        {
          "id": "S06.06",
          "q": "Why use PMI rather than raw co-occurrence counts?",
          "a": "PMI compares observed joint probability with the probability expected under independence. It emphasises unexpectedly strong associations, although rare events can obtain unstable large values; PPMI clips negative PMI values to zero.",
          "zh": "PMI 为 0 表示独立，不是没有共现；零共现需要处理 log 0。",
          "source": "W06 pp.35-46",
          "qZh": "为什么使用 PMI，而不直接使用共现次数？",
          "aZh": "PMI 比较观察到的联合概率与独立假设下的期望概率，突出超出预期的强关联。但稀有事件可能产生不稳定的大值；PPMI 将负 PMI 截断为 0。"
        },
        {
          "id": "S06.07",
          "q": "How does cosine similarity differ from the dot product?",
          "a": "Cosine divides the dot product by both vector norms, measuring orientation independently of length. A dot product reflects both alignment and magnitude; cosine can be negative for general signed embeddings.",
          "zh": "一般范围 [-1,1]；非负计数向量才常见 [0,1]。",
          "source": "W06 pp.40-46; E24 Q19-20",
          "qZh": "余弦相似度与点积有什么不同？",
          "aZh": "余弦相似度用两个向量的范数乘积对点积归一化，衡量不受长度影响的方向一致性。点积同时受方向和大小影响；一般带符号嵌入的余弦值可以为负。"
        },
        {
          "id": "S06.08",
          "q": "Contrast sparse count vectors and dense embeddings.",
          "a": "Sparse count vectors have interpretable context dimensions but can be very large. Dense learned vectors compress patterns into lower-dimensional features and share statistical strength, but individual dimensions are less interpretable.",
          "zh": "不是 dense 永远更好；任务、训练数据、检索成本都会影响选择。",
          "source": "W06 pp.53-61; E25 Q16",
          "qZh": "比较稀疏计数向量和稠密嵌入。",
          "aZh": "稀疏计数向量的上下文维度具有可解释性，但维数可能非常大。学习得到的稠密向量把模式压缩到较低维度，能够共享统计信息，但单个维度较难解释。"
        },
        {
          "id": "S06.09",
          "q": "What is t-SNE used for, and what should not be inferred from its plot?",
          "a": "t-SNE visualises high-dimensional representations in a low-dimensional space while emphasising local neighbourhoods. Global distances, cluster sizes and apparent gaps in a 2D plot need not faithfully represent the original geometry.",
          "zh": "主要是可视化工具，不是语言模型；二维图不是精确语义地图。",
          "source": "W06 pp.53-55; E25 Q15",
          "qZh": "t-SNE 用于什么？不能从它的图中推断什么？",
          "aZh": "t-SNE 将高维表示可视化到低维空间，重点保留局部邻域。二维图中的全局距离、簇大小和明显间隙，不一定忠实反映原始空间的几何关系。"
        },
        {
          "id": "S06.10",
          "q": "Compare CBOW and skip-gram.",
          "a": "CBOW predicts a target word from its surrounding context, often averaging context embeddings. Skip-gram predicts context words from a target word; both learn representations from unlabelled text.",
          "zh": "记方向：CBOW 周围到中心；skip-gram 中心到周围。",
          "source": "W06 pp.56-72",
          "qZh": "比较 CBOW 和 skip-gram。",
          "aZh": "CBOW 根据周围上下文预测目标词，通常对上下文嵌入取平均。Skip-gram 根据目标词预测上下文词；二者都从未标注文本中学习表示。"
        },
        {
          "id": "S06.11",
          "q": "What is negative sampling in embedding training?",
          "a": "It learns to distinguish observed target-context pairs from sampled negative pairs using a logistic objective. This avoids evaluating a full-vocabulary softmax for every training example, but depends on the sampling distribution and number of negatives.",
          "zh": "negative 不表示词义反义，而是采样出的非真实配对。",
          "source": "W06 pp.62-72",
          "qZh": "词嵌入训练中的负采样是什么？",
          "aZh": "它使用逻辑回归式目标，区分真实出现的目标词—上下文词对和采样得到的负词对。这避免了对每个训练样本计算全词表 softmax，但结果取决于负采样分布和负例数量。"
        },
        {
          "id": "S06.12",
          "q": "How does GloVe differ from word2vec?",
          "a": "GloVe fits a weighted objective based on global word co-occurrence statistics, aiming for vector interactions to explain log counts. Word2vec learns through local predictive objectives such as CBOW or skip-gram.",
          "zh": "global counts vs local prediction；两者都能产生 dense vectors。",
          "source": "W06 p.75",
          "qZh": "GloVe 与 word2vec 有什么不同？",
          "aZh": "GloVe 使用全局词共现统计拟合加权目标，使向量间相互作用能够解释共现次数的对数。Word2vec 则通过 CBOW、skip-gram 等局部预测目标学习。"
        },
        {
          "id": "S06.13",
          "q": "How can embeddings be evaluated, and what limits word analogies?",
          "a": "Intrinsic tests include word similarity, contextual similarity and analogy tasks; extrinsic tests measure downstream performance. Analogy success depends on the relation, vocabulary and evaluation protocol, and does not prove general reasoning ability.",
          "zh": "a:b::c:d 的向量方向先写出来；不要套一个固定 king-man 公式。",
          "source": "W06 pp.80-91; E25 Q17",
          "qZh": "如何评价嵌入？词类比任务有什么局限？",
          "aZh": "内在评价包括词相似度、上下文相似度和类比任务；外在评价衡量下游任务表现。类比是否成功取决于关系类型、词汇表和评价协议，不能证明模型具备一般推理能力。"
        },
        {
          "id": "S06.14",
          "q": "Why use subword or contextual embeddings?",
          "a": "Subword representations share information across related or unseen word forms. Contextual embeddings assign different representations to different occurrences of a word, addressing a key limitation of static embeddings that conflate senses.",
          "zh": "fastText 的子词与 BERT 的上下文是两个不同改进维度。",
          "source": "W06 pp.91-94; W09 pp.6-23",
          "qZh": "为什么使用子词或上下文嵌入？",
          "aZh": "子词表示在相关词形和未见词形之间共享信息。上下文嵌入为同一词的不同出现位置分配不同表示，解决静态嵌入把多个词义混在一起的重要局限。"
        },
        {
          "id": "S06.15",
          "q": "What is compositionality, and why is vector addition limited?",
          "a": "Compositionality derives a phrase’s meaning from its parts and how they combine. Simple vector addition ignores order and structure and may fail on negation, role reversal or idioms.",
          "zh": "“dog bites man” 与 “man bites dog” 不能只靠词向量相加区分。",
          "source": "W06 pp.47-50",
          "qZh": "什么是组合性？向量加法为什么有局限？",
          "aZh": "组合性根据各组成部分的意义及其组合方式推导短语意义。简单向量相加忽略词序和结构，因此可能无法处理否定、角色互换或习语。"
        }
      ],
      "titleZh": "词汇语义与词表示"
    },
    {
      "code": "07",
      "title": "Information retrieval and ranking architectures",
      "items": [
        {
          "id": "S07.01",
          "q": "Distinguish an information need from a query.",
          "a": "An information need is what the user wants to know; a query is the expression supplied to a retrieval system. A short or ambiguous query may only imperfectly specify the underlying need.",
          "zh": "query 是 need 的有限表达；相关性必须结合任务语境。",
          "source": "W07 pp.6-11",
          "qZh": "区分信息需求和查询。",
          "aZh": "信息需求是用户真正想知道的内容；查询是用户向检索系统提交的表达。简短或有歧义的查询，可能无法完整表达其潜在需求。"
        },
        {
          "id": "S07.02",
          "q": "What is the Cranfield evaluation paradigm?",
          "a": "It compares systems using a fixed document collection, topics or queries, and relevance judgments. Shared test conditions support controlled comparisons, but judgments may be incomplete and assessor-dependent.",
          "zh": "三要素 corpus、queries、qrels；pooling 并不意味着全部文档都被评过。",
          "source": "W07 pp.7-14",
          "qZh": "什么是 Cranfield 评价范式？",
          "aZh": "它使用固定文档集合、主题或查询，以及相关性判断来比较系统。共享测试条件有利于控制变量，但判断可能不完整，也可能受到评估者差异影响。"
        },
        {
          "id": "S07.03",
          "q": "What is an inverted index?",
          "a": "It maps each indexed term to a postings list of documents containing that term, optionally with frequencies and positions. It supports efficient matching without scanning every document for each query.",
          "zh": "term -> doc IDs；不是 doc -> 全部词的正向表。",
          "source": "W07 pp.16-20; E24 Q22; E25 Q19",
          "qZh": "什么是倒排索引？",
          "aZh": "它把每个索引词映射到包含该词的文档倒排列表，并可附带词频和位置信息。这使系统无需为每个查询扫描所有文档，就能高效匹配。"
        },
        {
          "id": "S07.04",
          "q": "Why can stopword removal or stemming hurt retrieval?",
          "a": "Stopword removal can destroy meaningful phrases or names, and over-stemming can merge unrelated terms. Under-stemming misses variants, so normalisation involves precision-recall trade-offs rather than guaranteed improvement.",
          "zh": "例如 The Who；stemming 不一定输出词典中的合法词。",
          "source": "W07 pp.29-34",
          "qZh": "为什么停用词删除或词干提取可能损害检索效果？",
          "aZh": "删除停用词可能破坏有意义的短语或名称；过度提取词干可能把无关词合并；提取不足又会遗漏词形变化。因此，规范化涉及精确率与召回率的权衡，而非保证提升。"
        },
        {
          "id": "S07.05",
          "q": "What are TF and IDF intended to capture?",
          "a": "TF measures how much a term occurs in a document, while IDF reduces the influence of terms occurring in many documents. Raw TF, normalised TF and different IDF variants must not be mixed without stating the convention.",
          "zh": "raw TF 是计数；normalized TF 才除以文档长度。",
          "source": "W07 pp.35-42; E24 Q24-25; E25 Q18",
          "qZh": "TF 和 IDF 分别想捕捉什么？",
          "aZh": "TF 衡量一个词在某文档中出现的程度；IDF 降低那些出现在大量文档中的词的影响。必须明确使用原始或归一化 TF、以及哪种 IDF 变体，不能不加说明地混用。"
        },
        {
          "id": "S07.06",
          "q": "How does BM25 improve on a simple TF-IDF product?",
          "a": "BM25 uses a saturating term-frequency contribution and document-length normalisation in addition to inverse document frequency. k1 controls TF saturation and b controls length normalisation; BM25F extends weighting to fields.",
          "zh": "k1、b 是调参项；给定公式若含 query-frequency 项也要保留。",
          "source": "W07 pp.38-42; E24 Q23",
          "qZh": "BM25 相比简单 TF-IDF 乘积有哪些改进？",
          "aZh": "BM25 除了逆文档频率，还使用会饱和的词频贡献和文档长度归一化。k1 控制词频饱和，b 控制长度归一化；BM25F 进一步支持字段加权。"
        },
        {
          "id": "S07.07",
          "q": "What is query-likelihood retrieval with Dirichlet smoothing?",
          "a": "Each document defines a language model, and documents are ranked by how likely they are to generate the query. Dirichlet smoothing mixes document counts with collection probabilities, avoiding zero probabilities for query terms missing from a document.",
          "zh": "它是 P(query|document model)，不是生成答案的 LLM。",
          "source": "W07 p.42",
          "qZh": "什么是使用 Dirichlet 平滑的查询似然检索？",
          "aZh": "每篇文档定义一个语言模型，系统根据该模型生成查询的可能性给文档排序。Dirichlet 平滑将文档计数与集合概率混合，避免文档中缺失的查询词得到零概率。"
        },
        {
          "id": "S07.08",
          "q": "Why use a multi-stage ranking cascade?",
          "a": "A cheap first stage retrieves candidates, followed by more expensive reranking on a smaller set. This improves the effectiveness-cost balance, but a later stage cannot recover relevant items already discarded unless additional retrieval occurs.",
          "zh": "第一阶段召回是后面重排的候选上限。",
          "source": "W07 pp.48-64",
          "qZh": "为什么使用多阶段排序级联？",
          "aZh": "廉价的第一阶段选出候选，随后只对较小候选集执行更昂贵的重排，从而平衡效果与成本。但如果不额外检索，后续阶段无法找回前面已经丢弃的相关文档。"
        },
        {
          "id": "S07.09",
          "q": "Contrast a cross-encoder with a dual encoder.",
          "a": "A cross-encoder jointly encodes a query-document pair and models fine-grained interactions, but needs a forward pass per candidate. A dual encoder encodes queries and documents separately, permitting precomputed document vectors and efficient vector search.",
          "zh": "cross 通常用于 rerank；dual 适合大规模第一阶段，不是两者训练完全相同。",
          "source": "W07 pp.60-68",
          "qZh": "比较交叉编码器和双编码器。",
          "aZh": "交叉编码器联合编码查询—文档对，可建模细粒度交互，但每个候选都需要一次前向计算。双编码器分别编码查询与文档，因此可以预计算文档向量并进行高效向量搜索。"
        },
        {
          "id": "S07.10",
          "q": "What is ColBERT-style late interaction?",
          "a": "It retains a vector for each token instead of one vector per document. For each query token, MaxSim finds its highest-similarity document token and sums these maxima, trading more index storage for richer matching.",
          "zh": "∑ query token max over document tokens；不要写成整个矩阵只取一次 max。",
          "source": "W07 p.69",
          "qZh": "什么是 ColBERT 式后期交互？",
          "aZh": "它为每个 token 保留一个向量，而不是每篇文档只保留一个向量。MaxSim 为每个查询 token 找到最相似的文档 token，再把这些最大相似度求和，以更大索引换取更丰富的匹配。"
        },
        {
          "id": "S07.11",
          "q": "Why use approximate nearest-neighbour search?",
          "a": "Exact similarity scoring over every dense vector can be expensive at scale. Approximate indexes use structures such as partitions or proximity graphs to reduce search cost, accepting a possible loss in nearest-neighbour recall.",
          "zh": "向量近邻召回和任务相关文档召回不是同一个指标。",
          "source": "W07 pp.66-69; W08 pp.62-66",
          "qZh": "为什么使用近似最近邻搜索？",
          "aZh": "在大规模集合中对所有稠密向量精确计算相似度可能很昂贵。近似索引利用空间分区或邻近图等结构降低搜索成本，但可能损失最近邻召回率。"
        },
        {
          "id": "S07.12",
          "q": "What makes a negative example hard in retrieval training?",
          "a": "A hard negative looks plausible to the current or a competing retriever but is judged non-relevant. It teaches finer distinctions than an arbitrary unrelated document, while incomplete judgments can accidentally make a true relevant document a false negative.",
          "zh": "DPR 可用 BM25 negatives；ANCE 用模型检索出的 negatives。",
          "source": "W07 pp.70-74",
          "qZh": "检索训练中的“困难负例”为什么困难？",
          "aZh": "它看起来与当前或其他检索器的查询很匹配，但被标注为不相关。它能训练比随机无关文档更精细的区分能力，不过不完整的相关性标注可能把真正相关文档误当负例。"
        },
        {
          "id": "S07.13",
          "q": "What is reciprocal rank fusion?",
          "a": "RRF adds 1/(c+rank) for each system in which a document appears, where c is a smoothing constant. It combines ranked lists without requiring their raw scores to share a common scale.",
          "zh": "RRF 是融合算法，RR/MRR 是评价指标，不要混淆。",
          "source": "W07 pp.75-77",
          "qZh": "什么是倒数排名融合 RRF？",
          "aZh": "文档在某系统排名为 rank 时，该系统贡献 1/(c+rank)，其中 c 为平滑常数；将各系统贡献相加。它融合排名列表，不要求各系统原始得分处于相同尺度。"
        },
        {
          "id": "S07.14",
          "q": "What is learned sparse retrieval, such as SPLADE?",
          "a": "It predicts weighted vocabulary dimensions, including expansion terms that may not literally appear in the input. These sparse vectors can still use inverted indexes, but extra non-zero terms increase index and retrieval costs.",
          "zh": "sparse 不一定是传统词频；神经模型也能输出稀疏词表向量。",
          "source": "W07 pp.85-93",
          "qZh": "什么是 SPLADE 这样的学习型稀疏检索？",
          "aZh": "模型预测词汇表各维度的权重，其中可包含输入中未直接出现的扩展词。这些稀疏向量仍能使用倒排索引，但更多非零词项会增加索引和检索成本。"
        },
        {
          "id": "S07.15",
          "q": "What do retrieval-specific pretraining methods try to improve?",
          "a": "They learn representations suitable for matching whole queries and passages rather than only predicting tokens. Contriever uses contrastive views of text; Condenser/coCondenser strengthen sequence representations, and RetroMAE uses asymmetric masking and reconstruction.",
          "zh": "认清方法目标即可；细节属于课件扩展，不需要背论文全部公式。",
          "source": "W07 pp.78-82",
          "qZh": "面向检索的预训练方法想改进什么？",
          "aZh": "它们学习适合匹配完整查询与段落的表示，而不只是预测 token。Contriever 使用文本不同视图的对比学习；Condenser/coCondenser 强化序列表示；RetroMAE 使用非对称掩码和重建。"
        },
        {
          "id": "S07.16",
          "q": "How do WAND and block-max WAND skip work safely?",
          "a": "They use upper bounds on possible term or block contributions to skip candidates that cannot beat the current top-k threshold. Rank safety depends on valid bounds for the scoring function; block bounds can be tighter than global term bounds.",
          "zh": "课件明确标注 optional systems deep dive；理解上界剪枝，不盲背实现。",
          "source": "W07 pp.22-28; extension",
          "qZh": "WAND 和 block-max WAND 如何安全地跳过计算？",
          "aZh": "它们利用词项或文档块可能贡献的上界，跳过不可能超过当前 top-k 阈值的候选。保持排名正确的前提是上界对该评分函数有效；块级上界可能比全局词项上界更紧。"
        },
        {
          "id": "S07.17",
          "q": "Why might a hybrid retriever be preferable to a purely dense one?",
          "a": "Lexical matching preserves exact names, identifiers and rare technical terms, while dense matching can bridge paraphrases and vocabulary mismatch. Their complementarity can help, but gains must be measured against added indexing and runtime cost.",
          "zh": "不能直接假定 hybrid 一定获胜；需要相同测试集与成本约束。",
          "source": "W07 pp.83-95; E25 Q21",
          "qZh": "为什么混合检索可能优于纯稠密检索？",
          "aZh": "词汇匹配保留精确名称、标识符和稀有术语的匹配能力；稠密匹配能处理改写和词汇不一致。二者的互补性可能有益，但必须结合新增索引和运行成本评价收益。"
        }
      ],
      "titleZh": "信息检索与排序架构"
    },
    {
      "code": "08",
      "title": "Evaluation and retrieval-augmented generation",
      "items": [
        {
          "id": "S08.01",
          "q": "How do precision and recall differ, and why can accuracy mislead in retrieval?",
          "a": "Precision is the fraction of retrieved documents that are relevant; recall is the fraction of relevant documents retrieved. Because most collection documents are non-relevant, predicting everything as non-relevant can yield high accuracy but useless retrieval.",
          "zh": "TP/(TP+FP) 对比 TP/(TP+FN)；别被海量 TN 迷惑。",
          "source": "W08 pp.39-42",
          "qZh": "精确率与召回率有什么不同？为什么检索中的准确率可能误导？",
          "aZh": "精确率是已检索文档中相关文档的比例；召回率是全部相关文档中被检索到的比例。集合中大多数文档不相关，因此把所有文档都预测为不相关，也可能获得很高但毫无检索价值的准确率。"
        },
        {
          "id": "S08.02",
          "q": "Why are rank-sensitive measures important?",
          "a": "Users often inspect only the first few results, so moving a relevant item toward the top can increase utility even if the retrieved set is unchanged. Unranked precision or F1 cannot distinguish all such reorderings.",
          "zh": "同样找回 5 个相关文档，前 5 名与第 6-10 名的价值不同。",
          "source": "W08 pp.42-45",
          "qZh": "为什么对排名敏感的指标很重要？",
          "aZh": "用户通常只检查前几个结果，因此即使返回集合不变，将相关结果前移也能增加效用。不考虑顺序的精确率或 F1 无法区分所有这类重排序。"
        },
        {
          "id": "S08.03",
          "q": "What do AP and MAP measure?",
          "a": "AP averages precision values at ranks containing relevant documents, normalised by the number of relevant documents under the stated convention. MAP is the arithmetic mean of AP over queries, so a single query has AP, with MAP equal to it only in a one-query test.",
          "zh": "检索不到的相关项也会影响完整 AP 的分母；不要只除以已找到个数。",
          "source": "W08 p.42; E25 Q20; E24 Q21",
          "qZh": "AP 和 MAP 衡量什么？",
          "aZh": "AP 累加各相关文档所在排名处的精确率，再按约定除以相关文档总数。MAP 是多个查询 AP 的算术平均；单个查询的指标叫 AP，只有测试集中仅有一个查询时 MAP 才与它相等。"
        },
        {
          "id": "S08.04",
          "q": "How do RR and MRR differ from AP?",
          "a": "RR is 1 divided by the rank of the first relevant result, or zero if none is found. MRR averages RR over queries, whereas AP considers the positions of all relevant results.",
          "zh": "MRR 必须有 1/Q；不是把同一列表所有相关名次的倒数相加。",
          "source": "W08 pp.43-44; sample formula appendices",
          "qZh": "RR、MRR 与 AP 有什么区别？",
          "aZh": "RR 是首个相关结果排名的倒数；没有相关结果时为 0。MRR 对多个查询的 RR 取平均；AP 则考虑所有相关结果的位置。"
        },
        {
          "id": "S08.05",
          "q": "What user models underlie ERR and RBP?",
          "a": "ERR weights reciprocal rank by the probability a user first becomes satisfied at that rank. RBP uses a persistence parameter p, weighting rank k by (1-p)p^(k-1); larger p represents deeper browsing.",
          "zh": "ERR 要乘前面未停止的概率；RBP 的 p 是用户继续浏览概率。",
          "source": "W08 pp.43-45; RBP formula is explanatory extension",
          "qZh": "ERR 和 RBP 背后的用户模型是什么？",
          "aZh": "ERR 按“用户首次在该排名获得满足”的概率对排名倒数加权。RBP 使用持续浏览参数 p，对第 k 位赋权 (1−p)p^(k−1)；p 越大代表浏览越深。"
        },
        {
          "id": "S08.06",
          "q": "When is nDCG appropriate, and is binary nDCG mathematically impossible?",
          "a": "nDCG is designed to reward ordered gains, particularly with graded relevance, normalised by an ideal ranking. It can be computed with binary labels, but for this course’s binary-relevance setting, AP/MAP and early-rank measures are a more defensible primary choice than an unjustified graded-gain metric.",
          "zh": "区分“数学上可算”与“任务中是否合适”；检索 F1 也忽略排名。",
          "source": "W08 pp.42-45; course A2 clarification supplied in chat",
          "qZh": "nDCG 什么时候合适？二值 nDCG 在数学上不可能吗？",
          "aZh": "nDCG 按排序后的收益计分，尤其适合分级相关性，再用理想排名归一化。二值标签也能计算 nDCG，但在本课程的二值相关性情境中，AP/MAP 和重视前列排名的指标比缺乏理由的分级收益指标更适合作为主要指标。"
        },
        {
          "id": "S08.07",
          "q": "How do EM, token F1 and semantic metrics differ?",
          "a": "EM requires an exact match after a specified normalisation; token F1 gives partial credit for token overlap. Embedding-based metrics can recognise paraphrases, but neither overlap nor semantic similarity alone proves factual correctness or grounding.",
          "zh": "答案生成的 F1 可以合理使用，不要把检索选指标的问题照搬到 QA。",
          "source": "W08 pp.46-47; W11 pp.91-94",
          "qZh": "EM、token F1 和语义指标有什么不同？",
          "aZh": "EM 要求按规定规范化后完全匹配；token F1 根据 token 重叠给予部分分数。基于嵌入的指标能识别改写，但仅凭重叠或语义相似，都不能证明事实正确或答案有证据依据。"
        },
        {
          "id": "S08.08",
          "q": "What are ROUGE and BERTScore measuring?",
          "a": "ROUGE measures overlap with reference text, for example unigram or bigram overlap. BERTScore matches contextual token embeddings using similarity, optionally with importance weights; both require interpretation alongside task-specific or human checks.",
          "zh": "METEOR 也属参考答案匹配思路；课件未要求背其完整公式。",
          "source": "W08 pp.46-47",
          "qZh": "ROUGE 和 BERTScore 分别衡量什么？",
          "aZh": "ROUGE 衡量与参考文本的重叠，例如 unigram 或 bigram 重叠。BERTScore 根据相似度匹配上下文化 token 嵌入，可选择加入重要性权重；两者都需结合任务特定或人工检查解释。"
        },
        {
          "id": "S08.09",
          "q": "What are the main stages of a RAG pipeline?",
          "a": "Documents are prepared, chunked, embedded or otherwise indexed; a retriever selects evidence for a query; a generator conditions on that evidence to produce an answer. Optional reranking improves the ordering of retrieved candidates.",
          "zh": "离线建索引与在线检索/生成要分开；不是先让 LLM 猜再找出处。",
          "source": "W08 pp.51-60; E24 Q26",
          "qZh": "RAG 流程包含哪些主要阶段？",
          "aZh": "先准备文档、分块，并进行嵌入或其他索引；检索器为查询选择证据；生成器以证据为条件生成回答。可选的重排阶段改善候选文档顺序。"
        },
        {
          "id": "S08.10",
          "q": "Why can RAG help compared with closed-book generation?",
          "a": "It supplies external or newly updated information without storing all knowledge in model parameters, and can support source attribution. It does not guarantee correctness: retrieval, evidence use and answer generation can each fail.",
          "zh": "“有引用”不等于“引用支持结论”；幻觉风险降低不等于归零。",
          "source": "W08 pp.55-71; W11 pp.95-98",
          "qZh": "与闭卷生成相比，RAG 为什么可能有帮助？",
          "aZh": "RAG 能提供外部或最新信息，不必把所有知识都存入模型参数，还能支持来源标注。但它不保证正确：检索、证据使用和答案生成都可能失败。"
        },
        {
          "id": "S08.11",
          "q": "Why is end-to-end RAG optimisation difficult?",
          "a": "Top-k document selection is discrete and rank-based metrics are not directly differentiable. Systems therefore use surrogate losses, separate training stages or other approximations rather than simply backpropagating MAP through an ordinary retrieval call.",
          "zh": "不要绝对说检索永远不能学习；难点在离散选择与目标不匹配。",
          "source": "W08 pp.67-86",
          "qZh": "为什么 RAG 的端到端优化很困难？",
          "aZh": "Top-k 文档选择是离散操作，基于排名的指标也不可直接微分。因此系统通常采用替代损失、分阶段训练或其他近似，而不能简单地让 MAP 穿过普通检索调用进行反向传播。"
        },
        {
          "id": "S08.12",
          "q": "Distinguish KNN-LM, REALM and RETRO at a high level.",
          "a": "KNN-LM retrieves similar hidden contexts and interpolates a neighbour-based next-token distribution with the LM. REALM integrates retrieval with masked-LM pretraining, whereas RETRO conditions chunk-level language modelling on retrieved chunks using cross-attention.",
          "zh": "检索频率与使用证据的方式不同；不是三个名字相同的 RAG prompt。",
          "source": "W08 pp.73-79; extension",
          "qZh": "概括 KNN-LM、REALM 和 RETRO 的区别。",
          "aZh": "KNN-LM 检索相似的隐藏上下文，将邻居产生的下一 token 分布与语言模型插值。REALM 把检索整合进掩码语言模型预训练；RETRO 通过交叉注意力，利用检索到的文本块为块级语言建模提供条件。"
        },
        {
          "id": "S08.13",
          "q": "How can retrieval augment examples rather than factual evidence?",
          "a": "It can retrieve similar input-output demonstrations to support in-context learning or a local prediction distribution. Retrieving documents for knowledge and retrieving labelled examples for task behaviour are different uses of retrieval.",
          "zh": "找事实 X 与找示例 (X,Y) 的目标不同。",
          "source": "W08 pp.82-89",
          "qZh": "检索如何增强示例，而不是提供事实证据？",
          "aZh": "系统可以检索相似的输入—输出示例，用于上下文学习或构建局部预测分布。检索文档来提供知识，与检索标注示例来指导任务行为，是不同用途。"
        },
        {
          "id": "S08.14",
          "q": "Why should RAG failures be analysed per query?",
          "a": "Averages can hide different systems failing on different questions. Inspecting the retrieved evidence, missing reasoning steps, distractors and generated answer separates retrieval failure from failure to use available evidence.",
          "zh": "课件反例显示加入噪声有时反而改善答案；这是需解释的现象，不是通用优化规则。",
          "source": "W08 pp.90-95",
          "qZh": "为什么应该逐查询分析 RAG 错误？",
          "aZh": "平均分可能掩盖不同系统在不同问题上的失败。检查检索证据、缺失的推理步骤、干扰内容和生成答案，有助于区分“没找到证据”和“已有证据但没有用好”。"
        }
      ],
      "titleZh": "评价与检索增强生成"
    },
    {
      "code": "09",
      "title": "Transformers, adaptation and efficient LLMs",
      "items": [
        {
          "id": "S09.01",
          "q": "Contrast encoder-only, decoder-only and encoder-decoder transformers.",
          "a": "Encoder-only models use bidirectional context for representations and classification; decoder-only models generate autoregressively with causal masking. Encoder-decoder models encode an input and generate an output using both causal self-attention and cross-attention.",
          "zh": "典型例子：BERT；GPT/Llama；T5/BART。架构与预训练目标有关联但不完全等同。",
          "source": "W09 pp.9-30",
          "qZh": "比较仅编码器、仅解码器和编码器—解码器 Transformer。",
          "aZh": "仅编码器模型使用双向上下文，适合表示学习与分类；仅解码器模型使用因果掩码进行自回归生成。编码器—解码器模型先编码输入，再同时使用因果自注意力和交叉注意力生成输出。"
        },
        {
          "id": "S09.02",
          "q": "What changed from static embeddings to ELMo and BERT?",
          "a": "ELMo uses bidirectional recurrent language-model features to make embeddings context-dependent. BERT uses deeply bidirectional transformer representations, enabling the same word to receive different representations in different contexts.",
          "zh": "ELMo 不是 Transformer；BERT 不是 Word2Vec。",
          "source": "W09 pp.6-18",
          "qZh": "从静态嵌入到 ELMo 和 BERT，发生了什么变化？",
          "aZh": "ELMo 利用双向循环语言模型的特征，使嵌入依赖上下文。BERT 使用深层双向 Transformer 表示，让同一个词在不同上下文中获得不同表示。"
        },
        {
          "id": "S09.03",
          "q": "What are BERT’s original pretraining objectives?",
          "a": "Masked language modelling predicts selected tokens using both left and right context, and next-sentence prediction classifies whether two segments follow each other. These describe original BERT, not every later encoder model.",
          "zh": "MLM 的“像 CBOW”只是直觉，不能说 BERT 就是词袋模型。",
          "source": "W09 pp.18-21; E25 Q23,25",
          "qZh": "原始 BERT 的预训练目标是什么？",
          "aZh": "掩码语言建模利用左右两侧上下文预测选中的 token；下一句预测判断两个片段是否连续。这些是原始 BERT 的目标，不适用于所有后来的编码器模型。"
        },
        {
          "id": "S09.04",
          "q": "Explain BERT’s 15% and 80/10/10 masking convention.",
          "a": "About 15% of input tokens are selected as prediction targets. Of those selected tokens, 80% are replaced by [MASK], 10% by random tokens and 10% remain unchanged, reducing mismatch between pretraining and ordinary input.",
          "zh": "80/10/10 的分母是被选中的 15%，不是全部 token。",
          "source": "W09 pp.19-21",
          "qZh": "解释 BERT 的 15% 和 80/10/10 掩码约定。",
          "aZh": "约 15% 的输入 token 被选为预测目标。在这些被选中的 token 中，80% 替换为 [MASK]，10% 替换为随机 token，10% 保持不变，以减小预训练与普通输入之间的不匹配。"
        },
        {
          "id": "S09.05",
          "q": "What information is added in BERT’s input representation?",
          "a": "Token/subword embeddings are combined with position embeddings and segment embeddings, with special tokens such as [CLS] and [SEP]. These represent content, order and sentence-pair membership.",
          "zh": "不是把三个 embedding 简单串成长三倍向量；原始 BERT 是相加。",
          "source": "W09 pp.22-24",
          "qZh": "BERT 的输入表示加入了哪些信息？",
          "aZh": "输入将 token/子词嵌入、位置嵌入和片段嵌入相加，并使用 [CLS]、[SEP] 等特殊 token。它们分别表示内容、顺序和句对中的片段归属。"
        },
        {
          "id": "S09.06",
          "q": "Why use subword tokenisation?",
          "a": "It represents rare words as combinations of reusable units, reducing the fixed vocabulary size and sparsity. It improves coverage but does not mean every language or rare string receives an equally efficient representation.",
          "zh": "open-vocabulary 效果仍依赖基础符号和实现；不同语言可能 token 数差很多。",
          "source": "W09 p.23",
          "qZh": "为什么使用子词分词？",
          "aZh": "它把罕见词表示为可复用单元的组合，降低固定词汇表大小和稀疏性。它提升覆盖率，但不代表所有语言或稀有字符串都能得到同样高效的表示。"
        },
        {
          "id": "S09.07",
          "q": "What are queries, keys and values in attention?",
          "a": "Queries determine what information a position seeks; keys determine how strongly other positions match; values provide the information combined using attention weights. Their learned projections are distinct even when all originate from the same sequence.",
          "zh": "self-attention 同源不等于投影后 Q=K=V 数值相等。",
          "source": "W09 pp.47-53",
          "qZh": "注意力中的 query、key 和 value 是什么？",
          "aZh": "Query 表示一个位置想寻找什么信息；key 决定其他位置与它的匹配程度；value 提供按注意力权重混合的信息。即使三者来自同一序列，其学习得到的投影仍不同。"
        },
        {
          "id": "S09.08",
          "q": "Why divide QKᵀ by sqrt(d_k)?",
          "a": "As key/query dimension grows, unscaled dot products can have large variance and make softmax excessively sharp. Scaling stabilises the scores and gradients under the usual variance assumptions.",
          "zh": "Attention = softmax(QKᵀ/sqrt(d_k) + mask)V；softmax 按 key 方向归一化。",
          "source": "W09 pp.29,48-53",
          "qZh": "为什么将 QKᵀ 除以 √d_k？",
          "aZh": "当 query/key 维度增大时，未缩放点积的方差可能变大，让 softmax 过度尖锐。在通常的方差假设下，缩放能稳定得分和梯度。"
        },
        {
          "id": "S09.09",
          "q": "How do self-attention, causal attention and cross-attention differ?",
          "a": "Self-attention draws queries, keys and values from the same sequence. Causal self-attention blocks future positions; cross-attention draws queries from one sequence and keys/values from another, such as decoder states attending to encoder output.",
          "zh": "causal 是可见性约束，不是另一套概率链式法则。",
          "source": "W09 pp.32-39",
          "qZh": "自注意力、因果注意力和交叉注意力有什么不同？",
          "aZh": "自注意力的 Q、K、V 来自同一序列；因果自注意力禁止访问未来位置；交叉注意力的 Q 来自一个序列，K、V 来自另一个序列，例如解码器关注编码器输出。"
        },
        {
          "id": "S09.10",
          "q": "Why use multiple attention heads?",
          "a": "Separate projections allow different attention distributions and representation subspaces for the same token. With a fixed total model width, multiple smaller heads do not inherently multiply projection parameters or total attention arithmetic by the number of heads.",
          "zh": "头可能学到不同关系，但不能保证每个头都有唯一可解释语义。",
          "source": "W09 pp.41-55; E25 Q22",
          "qZh": "为什么使用多个注意力头？",
          "aZh": "独立投影允许同一 token 在不同表示子空间形成不同注意力分布。当总模型宽度固定时，多个较小的头并不会天然使投影参数量或注意力总算术量按头数成倍增加。"
        },
        {
          "id": "S09.11",
          "q": "What do the feedforward and residual blocks contribute?",
          "a": "The position-wise feedforward block applies a nonlinear transformation after attention mixes information across tokens. Residual connections preserve an identity path and improve optimisation in deep networks.",
          "zh": "FFN 通常对每个位置使用同一组参数；残差不是删除其他层。",
          "source": "W09 pp.58-62",
          "qZh": "前馈模块和残差模块分别贡献什么？",
          "aZh": "注意力先混合不同 token 的信息，逐位置前馈模块再进行非线性变换。残差连接保留恒等路径，有助于深层网络优化。"
        },
        {
          "id": "S09.12",
          "q": "Contrast LayerNorm, RMSNorm and BatchNorm.",
          "a": "LayerNorm normalises features within a token representation, usually centring and rescaling them; RMSNorm rescales using the root mean square without mean subtraction. BatchNorm uses batch statistics for features, so its normalisation axis and train/inference behaviour differ.",
          "zh": "norm 的维度必须说清；RMSNorm 不等于标准差归一化。",
          "source": "W05 p.105; W09 pp.60-62,71",
          "qZh": "比较 LayerNorm、RMSNorm 和 BatchNorm。",
          "aZh": "LayerNorm 在一个 token 的特征维度内归一化，通常减均值并重新缩放；RMSNorm 使用均方根缩放但不减均值。BatchNorm 使用批次统计量，因此归一化轴以及训练/推理行为有所不同。"
        },
        {
          "id": "S09.13",
          "q": "Why do transformers require position information?",
          "a": "Ordinary self-attention without position information is permutation-equivariant and cannot independently encode token order. Learned or sinusoidal positions, or relative-position mechanisms such as RoPE, supply that missing structure.",
          "zh": "重排输入会相应重排输出，不应笼统说输出完全不变。",
          "source": "W09 pp.63-66",
          "qZh": "为什么 Transformer 需要位置信息？",
          "aZh": "没有位置信息的普通自注意力具有置换等变性，不能独立编码 token 顺序。可学习位置、正弦位置或 RoPE 等相对位置机制提供了缺失的顺序结构。"
        },
        {
          "id": "S09.14",
          "q": "What are RoPE and SwiGLU?",
          "a": "RoPE rotates query/key coordinates according to position so their interaction can depend on relative offsets. SwiGLU combines a Swish-activated projection with a gated second projection; it changes the feedforward nonlinearity rather than the attention mask.",
          "zh": "Llama 相比原 Transformer 还采用 pre-norm、RMSNorm；RoPE 不保证任意长外推。",
          "source": "W09 pp.70-75,81-82",
          "qZh": "什么是 RoPE 和 SwiGLU？",
          "aZh": "RoPE 根据位置旋转 query/key 坐标，使二者交互能够依赖相对位置。SwiGLU 将经过 Swish 激活的投影与另一门控投影组合；它改变前馈非线性，而不是注意力掩码。"
        },
        {
          "id": "S09.15",
          "q": "What does a KV cache save, and what does it cost?",
          "a": "It stores previous tokens’ per-layer keys and values so autoregressive decoding need not recompute them. Its memory grows with batch size, layers, sequence length and the number and size of KV heads; decoding is still sequential.",
          "zh": "cache 省重复计算，不会自动把所有注意力变为线性训练。",
          "source": "W09 pp.76-79",
          "qZh": "KV cache 保存什么？代价是什么？",
          "aZh": "它缓存先前 token 在各层的 key 和 value，避免自回归解码时重复计算。内存随批次大小、层数、序列长度、KV 头数量及头维度增长；解码本身仍是顺序进行的。"
        },
        {
          "id": "S09.16",
          "q": "How do MQA and GQA reduce serving memory?",
          "a": "MQA shares one key/value head among all query heads; GQA shares key/value heads within groups. Both retain multiple query heads while reducing distinct KV-cache entries, trading architectural flexibility for lower memory and bandwidth costs.",
          "zh": "MQA=1 组 KV；GQA=若干组；MHA=每个 query head 一套 KV。",
          "source": "W09 pp.77-79",
          "qZh": "MQA 和 GQA 如何降低服务时的内存需求？",
          "aZh": "MQA 让所有 query 头共享一组 key/value；GQA 让每一组 query 头共享 key/value。两者都保留多个 query 头，但减少不同的 KV 缓存项，以部分架构灵活性换取较低内存与带宽成本。"
        },
        {
          "id": "S09.17",
          "q": "Distinguish full fine-tuning, prompting and prompt tuning.",
          "a": "Full fine-tuning updates model weights on task data; ordinary prompting supplies instructions or demonstrations without gradient updates. Prompt tuning learns a small set of continuous prompt embeddings while keeping the main model frozen.",
          "zh": "few-shot examples 放在 context 不等于 fine-tuning；soft prompt 是可学习参数。",
          "source": "W09 pp.84-90; E25 Q24; E24 Q31-32",
          "qZh": "区分完整微调、提示和提示微调。",
          "aZh": "完整微调用任务数据更新模型权重；普通提示提供指令或示例，不进行梯度更新。提示微调在冻结主模型的情况下，学习少量连续提示嵌入。"
        },
        {
          "id": "S09.18",
          "q": "What do SFT, RLHF and DPO add after pretraining?",
          "a": "SFT trains on instruction-response examples. RLHF typically trains a preference reward model and optimises a policy with a constraint against excessive drift; DPO directly trains on preferred/rejected response pairs without a separate reward-model/RL loop.",
          "zh": "优化偏好和行为不等于保证真实性；三者目标与训练流程不同。",
          "source": "W09 pp.92-96",
          "qZh": "SFT、RLHF 和 DPO 在预训练后增加了什么？",
          "aZh": "SFT 使用指令—回答样本训练。RLHF 通常先训练偏好奖励模型，再在限制策略过度偏移的条件下优化策略；DPO 直接使用偏好/拒绝回答对训练，不需要独立奖励模型与强化学习循环。"
        },
        {
          "id": "S09.19",
          "q": "What does mixture-of-experts make cheaper, and what remains expensive?",
          "a": "An MoE routes each token to a small subset of expert feedforward networks, reducing active computation relative to using every expert. Total parameter storage, routing/communication and load balancing remain important costs.",
          "zh": "active parameters != total parameters；不能只按 active 数估计全部权重内存。",
          "source": "W09 pp.104-107",
          "qZh": "混合专家模型降低了什么成本？哪些仍然昂贵？",
          "aZh": "MoE 将每个 token 路由到少量前馈专家，相比激活所有专家减少实际计算。但总参数存储、路由通信和负载平衡仍是重要成本。"
        },
        {
          "id": "S09.20",
          "q": "What is the main lesson of compute-optimal scaling laws?",
          "a": "Model size and training-data size should be balanced for a given training budget. A larger undertrained model can lose to a smaller better-trained one, and the best deployment choice also depends on repeated inference costs, not only training cost.",
          "zh": "约 20 tokens/parameter 是特定研究下的经验规则，不是永恒定律。",
          "source": "W09 pp.105-108",
          "qZh": "计算最优缩放定律的主要启示是什么？",
          "aZh": "在固定训练预算下，应平衡模型大小与训练数据量。训练不足的大模型可能不如训练充分的小模型；部署选择还取决于反复推理的成本，而不仅是训练成本。"
        },
        {
          "id": "S09.21",
          "q": "Compare the sequence-length scaling of standard self-attention and an RNN.",
          "a": "Dense self-attention performs O(n²d) attention mixing, plus O(nd²) projection/feedforward costs, and parallelises across positions during training. A fixed-width RNN has linear sequence-length work but sequential recurrence; autoregressive transformer generation is also sequential.",
          "zh": "说 O(n²) 时指 attention 随长度的部分，不要遗漏模型宽度与阶段。",
          "source": "W09 pp.98-100; E25 Q26",
          "qZh": "比较标准自注意力与 RNN 随序列长度增长的复杂度。",
          "aZh": "稠密自注意力的信息混合成本为 O(n²d)，另有 O(nd²) 的投影/前馈成本；训练时可跨位置并行。固定宽度 RNN 的工作量随长度线性增长，但递归计算是顺序的；Transformer 的自回归生成也仍是顺序的。"
        }
      ],
      "titleZh": "Transformer、任务适配与高效 LLM"
    },
    {
      "code": "11",
      "title": "Decoding and question answering",
      "items": [
        {
          "id": "S11.01",
          "q": "Why can greedy decoding miss the most likely sequence?",
          "a": "It commits to the most likely next token without considering how good its later continuations will be. A slightly less likely first token can lead to a much more probable complete sequence.",
          "zh": "局部最大不保证全局最大；看完整概率乘积。",
          "source": "W11 pp.8-15",
          "qZh": "为什么贪心解码可能错过概率最高的完整序列？",
          "aZh": "它直接选当前概率最高的下一个 token，不考虑之后的续写质量。首个 token 的概率稍低，也可能导向概率大得多的完整序列。"
        },
        {
          "id": "S11.02",
          "q": "How does beam search work?",
          "a": "It expands the surviving partial hypotheses and keeps the highest-scoring k candidates globally at each step. Cumulative log probability scores a hypothesis; pruned hypotheses are not revisited, so the method is approximate rather than guaranteed optimal.",
          "zh": "不是每个父节点各保留 k 个；beam width=1 对应 greedy。",
          "source": "W11 pp.15-25",
          "qZh": "束搜索如何工作？",
          "aZh": "每一步扩展保留下来的部分序列，再从所有扩展候选中全局保留得分最高的 k 个。得分通常为累计对数概率；被剪枝的候选不会重新进入，因此它是近似算法，不保证全局最优。"
        },
        {
          "id": "S11.03",
          "q": "Why can a wider beam reduce output quality?",
          "a": "It searches the model’s scoring function more thoroughly, but high model probability may favour short, generic or repetitive outputs. More search can expose an imperfect objective rather than improve human usefulness.",
          "zh": "search error 与 model error 要区分；更多计算不等于更好文本。",
          "source": "W11 pp.26-29",
          "qZh": "为什么更宽的束可能降低输出质量？",
          "aZh": "更宽的束更充分地搜索模型评分函数，但高模型概率可能偏好短、通用或重复的输出。更多搜索可能暴露目标函数的缺陷，而非提升人的使用体验。"
        },
        {
          "id": "S11.04",
          "q": "What problem does length normalisation address?",
          "a": "Raw log probabilities tend to penalise longer completed hypotheses because each additional conditional probability is at most one. Normalising by a length penalty changes the trade-off; it does not universally make longer outputs better.",
          "zh": "不同序列不能说“只要更长就一定更低”，严格单调关系针对同一前缀的延长。",
          "source": "W11 pp.25-27",
          "qZh": "长度归一化解决什么问题？",
          "aZh": "每增加一个条件概率因子，其值最多为 1，因此原始对数概率往往不利于较长完整序列。除以长度惩罚会改变取舍，但不意味着更长输出普遍更好。"
        },
        {
          "id": "S11.05",
          "q": "Contrast top-k and nucleus sampling.",
          "a": "Top-k samples from a fixed number of highest-probability tokens after renormalisation. Nucleus sampling uses the smallest probability-ranked set reaching a chosen cumulative mass, so its size changes with model confidence.",
          "zh": "top-k 的 k 是候选词数；beam k 是部分序列数。",
          "source": "W11 pp.30-33",
          "qZh": "比较 top-k 与核采样。",
          "aZh": "Top-k 从概率最高的固定 k 个 token 中重新归一化并采样。核采样选取按概率降序排列后，累计概率达到给定阈值的最小集合，因此候选数量会随模型置信度变化。"
        },
        {
          "id": "S11.06",
          "q": "What does temperature change?",
          "a": "Dividing logits by a temperature below one sharpens the distribution, while a temperature above one flattens it. At the low-temperature limit mass concentrates on the maximum-logit tokens; ties require a tie-breaking convention.",
          "zh": "temperature 不能直接当作所有概率的线性乘数。",
          "source": "W11 pp.34-36",
          "qZh": "温度改变什么？",
          "aZh": "将 logits 除以小于 1 的温度会使分布更尖锐，大于 1 则使分布更平坦。温度趋近 0 时，概率质量集中到最大 logit 的 token；并列最大值仍需规定如何处理。"
        },
        {
          "id": "S11.07",
          "q": "How do locally typical sampling and Mirostat differ from simple top-k?",
          "a": "Locally typical sampling prefers tokens whose surprisal is close to the distribution’s entropy, potentially excluding an unusually predictable token. Mirostat uses feedback to adapt the sampling restriction toward a target surprisal or perplexity.",
          "zh": "typical 的概率质量阈值与 temperature 可能同用 τ 符号，但含义不同。",
          "source": "W11 pp.47-54",
          "qZh": "局部典型采样和 Mirostat 与简单 top-k 有何不同？",
          "aZh": "局部典型采样偏好惊异度接近分布熵的 token，可能排除异常容易预测的 token。Mirostat 通过反馈调整采样限制，使惊异度或困惑度接近目标值。"
        },
        {
          "id": "S11.08",
          "q": "When might you choose beam search, sampling or greedy decoding?",
          "a": "Beam search can suit constrained sequence transduction such as translation; sampling suits open-ended creative text; greedy decoding can suit short factual answers. These are task-dependent defaults, not guarantees of correctness or diversity.",
          "zh": "选择理由必须联系任务目标，而非说某方法普遍最好。",
          "source": "W11 pp.45-46",
          "qZh": "什么时候选择束搜索、采样或贪心解码？",
          "aZh": "束搜索可用于翻译等受约束的序列转换；采样适合开放式创作；贪心解码可用于简短事实回答。这些是依赖任务的经验选择，不保证正确性或多样性。"
        },
        {
          "id": "S11.09",
          "q": "What dimensions can be used to classify QA tasks?",
          "a": "Useful dimensions include the information source, question type and answer form. For example, a factoid span question over a supplied passage differs from multi-hop open-domain QA or visual QA.",
          "zh": "先看答案从哪里来、长什么样，再选模型。",
          "source": "W11 pp.58-72",
          "qZh": "可用哪些维度分类问答任务？",
          "aZh": "可以按信息来源、问题类型和答案形式分类。例如，给定段落中的事实片段问答，与多跳开放域问答或视觉问答不同。"
        },
        {
          "id": "S11.10",
          "q": "What is semantic parsing?",
          "a": "Semantic parsing maps natural language to a formal meaning representation, such as a logical query or program. That representation can be executed against a knowledge base, unlike a syntactic parse that describes sentence structure.",
          "zh": "syntax 不等于 semantics；执行结果还依赖 KB 是否完整和最新。",
          "source": "W11 pp.73-83; E24 Q10-12",
          "qZh": "什么是语义分析？",
          "aZh": "语义分析将自然语言映射为逻辑查询或程序等形式化意义表示。该表示可在知识库上执行，而句法分析描述的是句子结构。"
        },
        {
          "id": "S11.11",
          "q": "Why should knowledge bases include temporal qualifiers?",
          "a": "Some relations change over time, so an unqualified triple may be true for one date and false for another. Time intervals or stable base facts plus query-time computation allow historical and current questions to be answered consistently.",
          "zh": "存出生日期再计算年龄，比把年龄写死更稳；此处是表示问题而非背人物信息。",
          "source": "W11 pp.74-78",
          "qZh": "为什么知识库需要时间限定信息？",
          "aZh": "一些关系会随时间变化，因此不带时间的三元组可能在一个日期为真、另一日期为假。时间区间或稳定基础事实加查询时计算，有助于一致回答历史和当前问题。"
        },
        {
          "id": "S11.12",
          "q": "What is answer sentence selection?",
          "a": "It ranks candidate sentences by how well they answer a question, often using a query-sentence classifier or cross-encoder. It returns a sentence rather than necessarily extracting an exact span or generating a new response.",
          "zh": "常用 MAP/MRR；与 document retrieval、span extraction 区别清楚。",
          "source": "W11 p.84",
          "qZh": "什么是答案句选择？",
          "aZh": "它根据候选句回答问题的程度进行排序，常用查询—句子分类器或交叉编码器。返回的是句子，而不一定是精确抽取片段或新生成的回答。"
        },
        {
          "id": "S11.13",
          "q": "How does reading comprehension differ from open-domain QA?",
          "a": "Reading comprehension is given the relevant context and must answer from it. Open-domain QA first has to find useful evidence in a larger collection, adding a retrieval bottleneck.",
          "zh": "SQuAD 2.0 有不可回答问题；不能假设每题都在文中有 span。",
          "source": "W11 pp.85-98",
          "qZh": "阅读理解与开放域问答有何不同？",
          "aZh": "阅读理解已经给出相关上下文，系统需要从中作答。开放域问答必须先从更大集合中找到有用证据，因此多了检索瓶颈。"
        },
        {
          "id": "S11.14",
          "q": "How are EM and token F1 aggregated with multiple reference answers?",
          "a": "Under the SQuAD-style convention, normalise the prediction and references, score against each reference, and retain the maximum for that question. Then average question scores; define empty-answer behaviour explicitly for unanswerable questions.",
          "zh": "token overlap 用 multiset 计数；同词重复不能无限匹配。",
          "source": "W11 pp.92-94",
          "qZh": "有多个参考答案时，如何聚合 EM 和 token F1？",
          "aZh": "按 SQuAD 式约定，先规范化预测与参考答案，再分别比较，取每个问题上的最高分，最后对问题取平均。不可回答问题的空答案处理规则必须明确。"
        },
        {
          "id": "S11.15",
          "q": "Why is a question-only baseline useful in visual QA?",
          "a": "It reveals whether a model can exploit language priors without inspecting the image. Pairing similar questions with images requiring different answers helps test whether predictions actually depend on visual evidence.",
          "zh": "高 accuracy 可能是数据捷径，而非真正看懂图片。",
          "source": "W11 pp.99-105",
          "qZh": "为什么视觉问答需要“只看问题”的基线？",
          "aZh": "它能揭示模型是否不看图像，仅靠语言先验就获得高分。把相似问题与需要不同答案的图像配对，可以检验预测是否真正依赖视觉证据。"
        }
      ],
      "titleZh": "解码与问答"
    },
    {
      "code": "12",
      "title": "Fairness, annotation, safety and ethics",
      "items": [
        {
          "id": "S12.01",
          "q": "What does FATE stand for?",
          "a": "Fairness, accountability, transparency and ethics. These concerns apply throughout data collection, model design, evaluation and deployment rather than being a final checklist.",
          "zh": "四个维度都要联系实际受影响的人。",
          "source": "W12 pp.3-8",
          "qZh": "FATE 代表什么？",
          "aZh": "公平性（Fairness）、问责性（Accountability）、透明性（Transparency）和伦理（Ethics）。这些问题贯穿数据收集、模型设计、评价和部署，不应只作为最后的检查清单。"
        },
        {
          "id": "S12.02",
          "q": "Why are large datasets and mathematical algorithms not automatically unbiased?",
          "a": "Data can encode historical decisions, under-represented populations and selective observations. People also choose labels, features, objectives and deployment settings, so scale and automation do not remove value judgments.",
          "zh": "大样本仍可能系统性偏；算法执行精确不等于目标公正。",
          "source": "W12 pp.5-13",
          "qZh": "为什么大数据集和数学算法不会自动消除偏见？",
          "aZh": "数据可能编码历史决策、群体代表不足和选择性观察。标签、特征、目标和部署方式也由人选择，因此规模和自动化不会消除价值判断。"
        },
        {
          "id": "S12.03",
          "q": "Name six sources of bias discussed in the lecture.",
          "a": "They include biased labels, sample selection, biased task definitions, features or model structure, loss functions favouring some errors, and feedback loops. Each can introduce harm even if the other stages are carefully implemented.",
          "zh": "答场景题时定位机制，不要一律归因于“训练数据不好”。",
          "source": "W12 pp.10-13",
          "qZh": "列出讲义讨论的六种偏见来源。",
          "aZh": "包括有偏标签、样本选择、偏向性的任务定义、特征或模型结构、偏重某些错误的损失函数，以及反馈循环。即使其他阶段谨慎实施，其中任一来源仍可造成伤害。"
        },
        {
          "id": "S12.04",
          "q": "Distinguish allocational and representational harms.",
          "a": "Allocational harms affect access to resources, opportunities or service quality, such as unfair hiring decisions. Representational harms stereotype, erase or mischaracterise groups, such as presenting one demographic as the only typical leader.",
          "zh": "服务质量差异也可构成 allocational harm；同一系统可同时有两种伤害。",
          "source": "W12 pp.24-33; E25 Q27",
          "qZh": "区分分配性伤害与表征性伤害。",
          "aZh": "分配性伤害影响资源、机会或服务质量的获得，例如不公平招聘。表征性伤害使群体受到刻板化、忽视或错误描述，例如把某一人口群体表现为唯一典型领导者。"
        },
        {
          "id": "S12.05",
          "q": "Explain a predictive-policing feedback loop.",
          "a": "More patrols in one neighbourhood produce more recorded incidents there, which become training data suggesting it needs even more patrols. Recorded arrests then reflect enforcement intensity as well as underlying crime, reinforcing selective observation.",
          "zh": "模型影响未来数据，未来数据又强化模型；不能把 arrest 当作无偏 crime 标签。",
          "source": "W12 pp.10-18; E25 Q28",
          "qZh": "解释预测性警务中的反馈循环。",
          "aZh": "某地区部署更多巡逻，会产生更多被记录的事件；这些记录又被用作训练数据，暗示该地区需要更多巡逻。逮捕记录既反映潜在犯罪，也反映执法强度，从而强化选择性观察。"
        },
        {
          "id": "S12.06",
          "q": "Why can fairness criteria conflict?",
          "a": "With different group base rates and imperfect predictions, predictive parity and equal false-positive/false-negative rates generally cannot all hold simultaneously. A deployment must justify the chosen criterion and examine who bears the errors, rather than declare a single metric universally fair.",
          "zh": "是多个条件共同冲突；不要简化成“校准与相同 FPR 单独永远不可能”。",
          "source": "W12 pp.17-21; Chouldechova 2017 clarification",
          "qZh": "为什么公平性标准可能冲突？",
          "aZh": "当不同群体基础发生率不同且预测不完美时，预测值平等与相同的假阳性/假阴性率一般不能同时全部满足。部署时必须说明选定标准的理由，并检查由谁承担错误，而不能宣称单一指标普遍公平。"
        },
        {
          "id": "S12.07",
          "q": "What does WEAT test, and what does it not establish?",
          "a": "WEAT compares target groups’ relative cosine association with two attribute sets, using a permutation test and effect size. It probes chosen embedding associations; a small WEAT score does not establish fairness in a downstream application.",
          "zh": "统计关联不是人的本质属性；词表选择与下游验证很重要。",
          "source": "W12 pp.36-45",
          "qZh": "WEAT 检验什么？不能证明什么？",
          "aZh": "WEAT 比较两组目标词与两组属性词之间的相对余弦关联，并使用置换检验与效应量。它检验特定嵌入关联；较小的 WEAT 得分不能证明下游应用公平。"
        },
        {
          "id": "S12.08",
          "q": "Why can debiasing an embedding direction fail?",
          "a": "Protected information may remain recoverable through other or nonlinear patterns, even after an obvious direction is removed. Reducing an intrinsic score can therefore hide rather than eliminate downstream discrimination.",
          "zh": "必须同时测任务效果、群体差异和残余可预测性。",
          "source": "W12 pp.43-48,106-112",
          "qZh": "为什么删除一个嵌入偏见方向可能失败？",
          "aZh": "即使去掉明显方向，受保护属性信息仍可能通过其他方向或非线性模式被恢复。因此，降低内在指标可能只是隐藏而不是消除下游歧视。"
        },
        {
          "id": "S12.09",
          "q": "What should annotation guidelines specify?",
          "a": "They should define the project goal, labels with examples and edge cases, what to annotate or ignore, the workflow and tools, and the number and independence of judgments. Pilot annotation can reveal ambiguities before large-scale labelling.",
          "zh": "先写定义和边界例子，再标数据；不是让每人凭感觉。",
          "source": "W12 pp.50-54",
          "qZh": "标注指南应该规定什么？",
          "aZh": "应规定项目目标、标签定义及正反例和边界情况、标什么与忽略什么、工作流程和工具，以及判断数量与独立性。大规模标注前的试标注能暴露定义歧义。"
        },
        {
          "id": "S12.10",
          "q": "Why use independent annotators and adjudication?",
          "a": "Independent labels expose disagreement and reduce dependence on one person’s judgment. Adjudication resolves differences using evidence and guidelines, but the adjudicator can also be biased and agreement alone does not prove truth.",
          "zh": "先独立、再比较；不能讨论后统一再当独立一致性。",
          "source": "W12 pp.50-55",
          "qZh": "为什么需要独立标注者和裁决？",
          "aZh": "独立标签能揭示分歧，减少对单个人判断的依赖。裁决基于证据和指南解决差异，但裁决者也可能有偏见，一致性本身不证明事实真相。"
        },
        {
          "id": "S12.11",
          "q": "Why can raw agreement be misleading?",
          "a": "When one label dominates, annotators can agree frequently simply by choosing that label. Chance-corrected measures compare observed agreement with the agreement expected from label marginals.",
          "zh": "90% raw agreement 仍可能 κ<0。",
          "source": "W12 pp.56-64",
          "qZh": "为什么原始一致率可能误导？",
          "aZh": "某标签占绝大多数时，标注者只需频繁选择该标签就能获得较高一致率。机会校正指标将观察一致率与根据标签边际分布得到的机会一致率比较。"
        },
        {
          "id": "S12.12",
          "q": "When would you use Cohen’s kappa, Fleiss’ kappa or Krippendorff’s alpha?",
          "a": "Cohen’s kappa compares two raters on the same items; Fleiss’ kappa pools pairwise agreement with a specified number of ratings per item, allowing different raters across items. Krippendorff’s alpha also accommodates missing data and multiple measurement scales with an appropriate distance function.",
          "zh": "Fleiss 不是任意缺失都自动可用；标准公式假定每个 item 的 n 已规定。",
          "source": "W12 pp.65-79",
          "qZh": "何时使用 Cohen κ、Fleiss κ 或 Krippendorff α？",
          "aZh": "Cohen κ 比较对相同项目评分的两名标注者；Fleiss κ 在每个项目评分数量按约定给定时汇总两两一致性，允许不同项目由不同人评分。Krippendorff α 配合合适距离函数，还能处理缺失数据和多种测量尺度。"
        },
        {
          "id": "S12.13",
          "q": "What are guardrails, and why are input filters insufficient?",
          "a": "Guardrails constrain inputs, retrieved content, tool access and outputs according to safety and operational policies. An attack can arrive indirectly through a document or web page, so filtering only the user’s message leaves other entry points exposed.",
          "zh": "input/output 检查 + 最小权限；任何单层过滤都不是安全保证。",
          "source": "W12 pp.82-89",
          "qZh": "什么是护栏？为什么只过滤输入不够？",
          "aZh": "护栏根据安全和运行规则约束输入、检索内容、工具权限和输出。攻击也可能通过文档或网页间接进入，因此只检查用户消息会遗漏其他入口。"
        },
        {
          "id": "S12.14",
          "q": "Name the guardrail categories used in the lecture.",
          "a": "The lecture distinguishes ethical, compliance, contextual, security and adaptive guardrails. They address different risks and need ongoing testing rather than a one-time static rule set.",
          "zh": "讲类别时各给例子：偏见、隐私、跑题、泄漏、更新。",
          "source": "W12 pp.85-89",
          "qZh": "列出讲义使用的护栏类别。",
          "aZh": "讲义区分伦理、合规、上下文、安全和自适应护栏。它们处理不同风险，需要持续测试，而非一次性设置静态规则。"
        },
        {
          "id": "S12.15",
          "q": "Why can a beneficial NLP technology still create harm?",
          "a": "The same capability can have dual uses: translation can broaden access or enable surveillance, and stylometry can study authorship or identify anonymous speakers. Impact depends on users, incentives and deployment context.",
          "zh": "利益相关者不仅有开发者和客户，也有被系统作用的人。",
          "source": "W12 pp.46,91-95; E24 Q34-37",
          "qZh": "为什么有益的 NLP 技术仍可能造成伤害？",
          "aZh": "同一能力可以有双重用途：翻译可扩大信息获取，也可支持监控；文体计量可研究作者身份，也可识别匿名发言者。实际影响取决于使用者、激励和部署情境。"
        },
        {
          "id": "S12.16",
          "q": "How do legal and ethical considerations differ?",
          "a": "Legal considerations concern applicable rules and obligations; ethical considerations concern justified conduct, benefits and harms. A legal use can still be ethically objectionable, and compliance does not settle all questions of responsibility.",
          "zh": "这是课程概念解释，不是对具体部署的法律意见。",
          "source": "W12 pp.92-99; E25 Q29",
          "qZh": "法律与伦理考量有什么区别？",
          "aZh": "法律考量关注适用规则和义务；伦理考量关注行为是否正当，以及利益和伤害。合法使用仍可能在伦理上不可接受，合规不能解决所有责任问题。"
        },
        {
          "id": "S12.17",
          "q": "What are the data-protection principles highlighted in the lecture?",
          "a": "They are lawfulness/fairness/transparency, purpose limitation, data minimisation, accuracy, storage limitation, integrity/confidentiality and accountability. Rights such as access or erasure have scope and exceptions; they should not be described as unconditional guarantees.",
          "zh": "记原则与工程含义；真实法律适用范围需要按具体情境核实。",
          "source": "W12 pp.98-99",
          "qZh": "讲义强调了哪些数据保护原则？",
          "aZh": "包括合法性/公平性/透明性、目的限制、数据最小化、准确性、存储限制、完整性/保密性和问责性。访问或删除等权利有适用范围与例外，不能表述为无条件保证。"
        },
        {
          "id": "S12.18",
          "q": "Why is deleting a training record not the same as machine unlearning?",
          "a": "A trained model may still encode or memorise information from the removed record. Exact retraining without it provides a reference, while approximate unlearning aims to remove its influence more cheaply and must be evaluated for residual leakage and utility loss.",
          "zh": "删除数据库 != 参数已遗忘；拒答也不等于真正遗忘。",
          "source": "W12 pp.100-104",
          "qZh": "为什么删除训练记录不等同于机器遗忘？",
          "aZh": "训练后的模型仍可能编码或记住已删除记录的信息。完全排除该记录重新训练可作为参照；近似遗忘试图以较低成本移除其影响，但需评价残余泄漏和效用损失。"
        },
        {
          "id": "S12.19",
          "q": "What does spectral attribute removal do?",
          "a": "It finds representation directions correlated with a protected attribute using the SVD of a mean-centred cross-covariance matrix, then projects them out. Removing more directions may reduce measured association but also discard task-relevant information or leave nonlinear leakage.",
          "zh": "x_new=(I-U_k U_kᵀ)x；公平和效用要一起报告。",
          "source": "W12 pp.105-112",
          "qZh": "谱属性移除做什么？",
          "aZh": "它对均值中心化的交叉协方差矩阵进行奇异值分解，找出与受保护属性相关的表示方向，再将其投影移除。去掉更多方向可能降低测得关联，也可能丢失任务信息或留下非线性泄漏。"
        },
        {
          "id": "S12.20",
          "q": "Why is explainability useful, and why is an explanation not a proof of fairness?",
          "a": "Explanations help scrutinise consequential decisions, hidden shortcuts and unexpected patterns. An explanation can still be incomplete or unfaithful, so it must be tested alongside outcomes, error rates and the actual decision process.",
          "zh": "区分解释模型整体行为与解释某个预测。",
          "source": "W12 pp.113-115",
          "qZh": "为什么可解释性有用？解释为什么不等于公平证明？",
          "aZh": "解释有助于审查重要决策、隐藏捷径和意外模式。但解释仍可能不完整或不忠实，因此必须结合结果、错误率及实际决策过程检验。"
        }
      ],
      "titleZh": "公平性、标注、安全与伦理"
    },
    {
      "code": "X",
      "title": "Older-sample bridge: CNNs, recurrence and sequence models",
      "items": [
        {
          "id": "SX.01",
          "q": "What does a convolutional kernel do in text processing?",
          "a": "It applies shared weights to local input windows to detect recurring patterns, such as short phrases. Pooling can aggregate detected features, but local filters alone do not automatically capture arbitrary long-distance dependencies.",
          "zh": "旧样卷补充；二维 3x3 kernel 参数还要乘输入通道数。",
          "source": "E24 Q28-30; supplementary bridge",
          "qZh": "卷积核在文本处理中做什么？",
          "aZh": "它用共享权重处理局部输入窗口，识别反复出现的模式，例如短语。池化可汇总检测特征，但仅靠局部过滤器不能自动捕捉任意长距离依赖。"
        },
        {
          "id": "SX.02",
          "q": "What makes an RNN different from a feedforward model over a fixed window?",
          "a": "An RNN repeatedly updates a hidden state from the current input and previous state, sharing parameters across time. This supports variable-length sequences but introduces sequential computation and long-range gradient difficulties.",
          "zh": "参数共享不意味着计算次数不随长度增长。",
          "source": "E24 Q29; E25 Q26; W09 pp.14-15,98-100",
          "qZh": "RNN 与固定窗口前馈模型有什么不同？",
          "aZh": "RNN 根据当前输入和先前隐藏状态反复更新状态，并跨时间共享参数。这支持变长序列，但引入顺序计算和长距离梯度困难。"
        },
        {
          "id": "SX.03",
          "q": "Why use gated recurrence such as an LSTM?",
          "a": "Gates control what information is written, retained and read from a memory state. This helps preserve useful information and gradients over longer ranges, although it does not eliminate all long-context or optimisation difficulties.",
          "zh": "仅作旧题与 ELMo 的衔接复习，不新增一整章未提供的讲义。",
          "source": "E24 Q29; W09 p.14; supplementary bridge",
          "qZh": "为什么使用 LSTM 等门控循环结构？",
          "aZh": "门控制哪些信息被写入、保留和从记忆状态读出，有助于在更长距离保留信息和梯度。但它不能消除所有长上下文或优化难题。"
        },
        {
          "id": "SX.04",
          "q": "How can a seq2seq model produce an output of a different length from its input?",
          "a": "An encoder constructs source representations, and a decoder emits output tokens until an end marker. Attention gives the decoder access to multiple source positions rather than forcing all information through one fixed context vector.",
          "zh": "例如翻译；输入长度与输出长度无须一一对应。",
          "source": "E24 Q29; W09 pp.28-39",
          "qZh": "Seq2seq 如何生成长度与输入不同的输出？",
          "aZh": "编码器构建源序列表示，解码器持续生成 token，直到输出结束标记。注意力让解码器访问多个源位置，而不是把全部信息压缩进一个固定上下文向量。"
        }
      ],
      "titleZh": "旧样卷补充：CNN、循环网络与序列模型"
    }
  ],
  "long": [
    {
      "id": "L01",
      "code": "01",
      "topic": "Language theory and NLP",
      "q": "Explain why successful NLP requires more than matching words to dictionary meanings.",
      "a": "Words can have several senses, and the same words can form different syntactic structures. Context, discourse and world knowledge help determine which interpretation is intended, as in deciding whether “bank” denotes a financial institution or a riverside. Morphology and syntax also contribute information that a bag of dictionary entries loses. Therefore, useful NLP systems combine representations of form, structure and context rather than treating meaning as a fixed lookup table.",
      "zh": "得分点：词义歧义；结构/语境机制；具体例子。避免只重复“语言很复杂”。",
      "source": "W01 pp.45-53; W04 pp.73-80; W06 pp.12-28",
      "qZh": "解释为什么成功的 NLP 不只是把词与词典释义匹配。",
      "aZh": "词可以有多个词义，相同词语也能组成不同句法结构。上下文、篇章和世界知识帮助确定意图，例如判断 bank 指金融机构还是河岸。形态和句法还提供了词典条目集合无法保留的信息。因此，有效的 NLP 系统会结合形式、结构和上下文表示，而不是把意义当成固定查询表。"
    },
    {
      "id": "L02",
      "code": "01",
      "topic": "Formal power versus processing",
      "q": "Compare finite-state and context-free models, and explain why grammaticality is not the same as processing ease.",
      "a": "Finite-state models have bounded state memory, while context-free grammars can represent recursive hierarchical structures such as unbounded nested dependencies. This makes CFGs more expressive, although some natural-language constructions motivate formalisms beyond CFGs. A formally licensed deeply centre-embedded sentence may nevertheless overwhelm human working memory. Thus, a grammar describes structural possibilities, while a processing model must also explain which possibilities humans can handle efficiently.",
      "zh": "得分点：表达能力区别；递归例子；competence/performance 区别。不要把所有难句都说成不合语法。",
      "source": "W01 pp.34-44; W04 pp.81-84",
      "qZh": "比较有限状态模型与上下文无关模型，并解释为什么合乎语法不等于容易处理。",
      "aZh": "有限状态模型的状态记忆有限，而上下文无关语法能够表示无界嵌套依赖等递归层级结构。这使 CFG 表达力更强，但某些自然语言结构还促使人们使用超越 CFG 的形式体系。形式上合法的深层中心嵌套句仍可能超出人类工作记忆。因此，语法描述结构可能性，而处理模型还必须解释人能高效处理哪些可能结构。"
    },
    {
      "id": "L03",
      "code": "02",
      "topic": "Chain rule and Markov approximation",
      "q": "Explain how the chain rule is used in language modelling and why n-gram models approximate it.",
      "a": "The chain rule expresses a sentence probability as a product of next-token probabilities conditioned on all preceding tokens. Estimating a separate distribution for every full history is impractical because most histories are unseen. An n-gram model therefore restricts the history to the previous n-1 tokens, allowing counts to be shared but losing longer-distance dependencies. Smoothing or interpolation improves robustness to sparse counts without restoring all the context that was discarded.",
      "zh": "得分点：准确公式含义；稀疏原因；近似的好处与损失；平滑的作用边界。",
      "source": "W02 pp.4-21,55-71; E24 Q1,3",
      "qZh": "解释链式法则如何用于语言建模，以及 n-gram 为什么对它进行近似。",
      "aZh": "链式法则把句子概率表示为每个 token 在全部前文条件下的概率乘积。为每一种完整历史估计独立分布并不现实，因为多数历史从未出现。因此，n-gram 只保留前 n−1 个 token，使计数可以共享，但丢失较长距离依赖。平滑或插值提高稀疏计数下的稳健性，却不能恢复所有被丢弃的上下文。"
    },
    {
      "id": "L04",
      "code": "02",
      "topic": "Evaluation design",
      "q": "A model has lower test perplexity than another model. Does that prove it is the better NLP system?",
      "a": "Lower perplexity means the model assigns higher length-normalised probability to the observed tokens under the chosen scoring convention. The comparison is meaningful only with compatible test data, tokenisation and treatment of boundaries or unknown words. It does not directly measure factuality, fairness or success on a downstream task, so an extrinsic evaluation may rank the systems differently. I would therefore report the controlled perplexity comparison alongside task-specific results, using development data for tuning and an untouched test set for the final estimate.",
      "zh": "得分点：PP 衡量什么；比较条件；内在/外在评价；防泄漏。",
      "source": "W02 pp.28-41; W08 pp.24-37; E25 Q4",
      "qZh": "一个模型的测试困惑度比另一个低，是否证明它是更好的 NLP 系统？",
      "aZh": "较低困惑度表示在选定计分约定下，模型给实际观察 token 分配了更高的长度归一化概率。只有测试数据、分词、边界和未知词处理可比时，比较才有意义。它不直接衡量真实性、公平性或下游任务成功，因此外在评价可能给出不同排序。我会同时报告受控困惑度比较与任务结果，并只用开发集调参、保留未触碰的测试集作最终评价。"
    },
    {
      "id": "L05",
      "code": "02",
      "topic": "Smoothing and model choice",
      "q": "Compare add-one smoothing, backoff and interpolation for sparse n-gram models.",
      "a": "Add-one smoothing assigns a pseudo-count to every possible continuation, ensuring non-zero probabilities but often distorting common-event estimates in a large vocabulary. Backoff uses a lower-order estimate when the higher-order evidence is insufficient, while interpolation continuously mixes estimates from several orders. Interpolation weights should be non-negative, sum to one and be chosen using held-out development data. Stupid backoff is a scalable scoring heuristic rather than a normalised probability model, so it should not be treated as interchangeable with a calibrated language model.",
      "zh": "得分点：三种机制；大词表下的代价；λ 与数据划分；score/probability 区别。",
      "source": "W02 pp.58-77; E25 Q3",
      "qZh": "比较稀疏 n-gram 模型中的加一平滑、回退和插值。",
      "aZh": "加一平滑为所有可能后续 token 加伪计数，确保非零概率，但大词汇表下常会扭曲常见事件估计。回退在高阶证据不足时使用低阶估计；插值则持续混合多个阶数的估计。插值权重应非负、总和为 1，并用留出的开发数据选择。Stupid backoff 是可扩展的评分启发式，而非归一化概率模型，不能与校准的语言模型等同处理。"
    },
    {
      "id": "L06",
      "code": "03",
      "topic": "HMM tagging",
      "q": "Describe how an HMM can resolve POS ambiguity and how Viterbi makes inference tractable.",
      "a": "An HMM represents tags as hidden states and words as emitted observations, combining lexical emission probabilities with transitions between tags. For an ambiguous word such as “can”, surrounding tag transitions can favour an auxiliary interpretation even if another tag is common in isolation. Viterbi stores the best score and predecessor for each state at each position, then backtracks from the best final state. It reduces dense first-order decoding from exponential path enumeration to O(TK²), although the first-order independence assumptions still limit the model.",
      "zh": "得分点：隐藏/观察变量；上下文消歧；动态规划与回溯；复杂度及假设。",
      "source": "W03 pp.37-83",
      "qZh": "说明 HMM 如何解决词性歧义，以及 Viterbi 如何使推断可行。",
      "aZh": "HMM 把标签表示为隐藏状态，把词表示为发射的观察量，并组合词汇发射概率与标签转移概率。对 can 等歧义词，周围标签转移可能支持助动词解释，即使孤立看另一个标签更常见。Viterbi 在每个位置为每个状态保存最佳分数和前驱，再从最佳终态回溯。它将稠密一阶解码从指数路径枚举降低到 O(TK²)，但一阶独立性假设仍限制模型。"
    },
    {
      "id": "L07",
      "code": "03",
      "topic": "NER design",
      "q": "Discuss the limitations of rule-based NER and how rules can be combined with learned models.",
      "a": "Rules and gazetteers can recognise familiar names or high-precision patterns, but they are brittle under spelling variation, unseen entities and changes of domain. They also struggle with context-dependent types, such as “Apple” denoting an organisation in one sentence and a fruit in another. A hybrid system can use rules as features, constraints or weak labels and let a sequence model learn contextual patterns and entity boundaries. The combination must be evaluated on held-out data because noisy rules can propagate errors and may be less reliable for under-represented naming conventions.",
      "zh": "得分点：边界与类型；规则短板；具体结合方式；不是无条件承诺准确率提高。",
      "source": "W03 pp.89-94; E24 Q7-9; E25 Q8",
      "qZh": "讨论规则式 NER 的局限，以及如何将规则与学习模型结合。",
      "aZh": "规则和实体名录可识别熟悉名称或高精度模式，但对拼写变化、未见实体和领域变化较脆弱。它们也难处理依赖上下文的类型，例如 Apple 在一句中指组织、另一句中指水果。混合系统可把规则用作特征、约束或弱标签，让序列模型学习上下文规律和实体边界。必须用留出数据评价，因为有噪规则会传播错误，对代表不足的命名习惯也可能更不可靠。"
    },
    {
      "id": "L08",
      "code": "04",
      "topic": "Parsing algorithms",
      "q": "Compare top-down, bottom-up and chart parsing approaches.",
      "a": "Top-down parsing uses the start symbol and grammar to predict possible structures, but can explore expectations that do not match the input. Bottom-up parsing is anchored in observed words, yet may build constituents that cannot connect to a complete sentence. Chart methods retain partial analyses so repeated subproblems are solved once; CKY organises spans while Earley uses prediction, scanning and completion states. This reuse improves efficiency, but ambiguity may still produce many alternative analyses and requires an additional model or context to choose an interpretation.",
      "zh": "得分点：两种方向的优势/代价；缓存子问题；CKY/Earley 关联；识别与消歧分开。",
      "source": "W04 pp.29-80",
      "qZh": "比较自顶向下、自底向上和 chart parsing。",
      "aZh": "自顶向下分析利用起始符号与语法预测结构，但可能探索与输入不匹配的预期。自底向上分析以观察到的词为基础，但可能构建无法连接成完整句子的成分。Chart 方法保存部分分析，避免重复求解：CKY 按跨度组织，Earley 使用预测、扫描和完成状态。复用提升效率，但歧义仍可产生很多候选，需要额外模型或上下文选择解释。"
    },
    {
      "id": "L09",
      "code": "04",
      "topic": "Syntax versus semantics",
      "q": "Explain how syntactic analysis supports semantic parsing or relation extraction, and why it is insufficient alone.",
      "a": "A syntactic parse identifies phrase structure or grammatical dependencies that help locate participants in an event. However, syntactic roles do not map directly to semantic roles: in “B was acquired by A”, the subject B is the target rather than the buyer. A semantic parser or relation extractor must also resolve entity identity, word sense, voice and the target relation or schema. Treebanks provide valuable structural supervision, but ordinary syntactic trees are not automatically examples of executable logical forms.",
      "zh": "得分点：syntax 的帮助；主动/被动反例；语义和 schema；treebank 边界。",
      "source": "W04 pp.18-25,64-95; W11 pp.73-83; E24 Q12",
      "qZh": "解释句法分析如何支持语义分析或关系抽取，以及为什么单靠它还不够。",
      "aZh": "句法分析识别短语结构或语法依赖，帮助定位事件参与者。但句法角色不能直接映射为语义角色：在“B was acquired by A”中，主语 B 是收购目标而非买方。语义分析器或关系抽取器还必须解决实体身份、词义、语态和目标关系模式。树库提供有用的结构监督，但普通句法树不自动构成可执行逻辑形式的训练实例。"
    },
    {
      "id": "L10",
      "code": "04",
      "topic": "Ambiguity",
      "q": "Use an example to explain why producing a valid parse is not the same as understanding the intended meaning.",
      "a": "In “I saw the man with a telescope”, a valid grammar can attach the PP to the seeing event or to the man. Both analyses may be grammatically well formed, but they imply different ownership or use of the telescope. A parser can enumerate or rank the alternatives using statistical evidence, while discourse and world knowledge can supply further constraints. The intended interpretation is therefore not determined by grammatical validity alone, and a single aggregate parsing score may conceal systematic attachment errors.",
      "zh": "得分点：明确两种读法；合法不等于正确；语境/统计；错误分析。",
      "source": "W04 pp.73-84",
      "qZh": "举例说明为什么生成合法句法树不等于理解意图。",
      "aZh": "在“I saw the man with a telescope”中，合法语法可把介词短语附着到看的动作，也可附着到男人。两种分析都可能合乎语法，但意味着不同的望远镜归属或使用方式。分析器可借统计证据列举或排序候选，篇章与世界知识还可增加约束。因此，意图不能仅由语法合法性决定，单一总体分析得分也可能掩盖系统性的附着错误。"
    },
    {
      "id": "L11",
      "code": "05",
      "topic": "Backpropagation",
      "q": "Explain why backpropagation is an efficient dynamic-programming algorithm, not merely a statement of the chain rule.",
      "a": "The forward pass records intermediate values in a computational graph, and the reverse pass propagates a loss derivative through each local operation. The chain rule supplies the local derivative relationships, while dynamic programming reuses shared intermediate derivatives instead of expanding every path separately. When a value influences the loss through several branches, their derivative contributions are added. Backpropagation therefore computes all required gradients with work comparable to a small constant number of graph evaluations, after which a separate optimiser updates the parameters.",
      "zh": "得分点：forward cache；reverse pass；共享与累加；梯度计算不等于 optimizer。",
      "source": "W05 pp.66-93; W13 p.10; E24 Q15-16",
      "qZh": "解释为什么反向传播是高效的动态规划算法，而不仅是链式法则的陈述。",
      "aZh": "前向传播在计算图中记录中间值，反向传播则穿过每个局部操作传递损失导数。链式法则提供局部导数关系，而动态规划复用共享中间导数，避免分别展开每条路径。当一个值通过多条分支影响损失时，导数贡献必须相加。因此，反向传播只需约相当于少量计算图求值的工作量，就能得到所需梯度；随后由独立优化器更新参数。"
    },
    {
      "id": "L12",
      "code": "05",
      "topic": "Training deep models",
      "q": "Describe the vanishing-gradient problem and discuss two ways to mitigate it.",
      "a": "During backpropagation, gradients are repeatedly multiplied by local derivatives, so small factors can make early-layer updates negligible. Saturating sigmoid or tanh units are a common contributor, and long recurrent chains create a similar difficulty across time. ReLU’s positive branch and suitable initialisation can preserve useful signal, while residual connections provide a shorter identity route for gradients. These are mitigations rather than guarantees: dead ReLU units, unsuitable scales or unstable optimisation can still prevent learning.",
      "zh": "得分点：乘积机制；训练后果；至少两项措施及作用；不写绝对保证。",
      "source": "W05 pp.99-105; W09 pp.59-62; E24 Q17; E25 Q12",
      "qZh": "描述梯度消失，并讨论两种缓解方法。",
      "aZh": "反向传播反复乘以局部导数，较小因子会让早期层的更新变得可忽略。饱和的 sigmoid/tanh 是常见原因，较长循环链也在时间维度产生类似困难。ReLU 的正半轴及合适初始化有助于保留信号，残差连接则提供更短的恒等梯度路径。这些只是缓解措施，失活 ReLU、不合适尺度或不稳定优化仍可能阻止学习。"
    },
    {
      "id": "L13",
      "code": "05",
      "topic": "Generalisation and regularisation",
      "q": "Compare dropout, L2 regularisation and early model selection using development data.",
      "a": "Dropout randomly suppresses activations during training, discouraging units from relying excessively on particular partners. L2 regularisation instead adds a weight-magnitude penalty to the objective, changing the preferred solution. Development performance can select stopping points, regularisation strength or averaged checkpoints without contaminating the final test evaluation. These methods address different aspects of overfitting and optimisation, so their combined benefit must be measured rather than assumed.",
      "zh": "得分点：机制差别；训练/推理差异；dev 的作用；不能用 test 调方案。",
      "source": "W05 pp.101-105; W02 pp.30-33; E25 Q13",
      "qZh": "比较 dropout、L2 正则化和利用开发集进行早期模型选择。",
      "aZh": "Dropout 在训练时随机屏蔽激活值，减少单元过度依赖特定伙伴。L2 则在目标中增加权重大小惩罚，改变偏好的解。开发集表现可用于选择停止点、正则化强度或平均检查点，而不污染最终测试评价。这些方法针对过拟合与优化的不同方面，组合收益必须测量，不能直接假定。"
    },
    {
      "id": "L14",
      "code": "06",
      "topic": "Learning semantics from text",
      "q": "Compare count-based distributional vectors, word2vec and GloVe.",
      "a": "Count-based vectors encode how often words occur in chosen contexts, often reweighting counts with PMI to discount uninformative co-occurrence. Word2vec learns dense representations through a predictive objective, using context to predict a word or a word to predict context. GloVe fits vector relationships to global log co-occurrence statistics with a weighted objective. All exploit distributional regularities, but they differ in dimensionality, optimisation and what information is retained, and none automatically separates every sense or removes social bias.",
      "zh": "得分点：三者表示与目标；共同假设；至少一个限制。",
      "source": "W06 pp.30-75",
      "qZh": "比较基于计数的分布式向量、word2vec 和 GloVe。",
      "aZh": "计数向量记录词在指定上下文中的出现次数，常用 PMI 重新加权以弱化缺乏信息的共现。Word2vec 使用预测目标学习稠密表示，由上下文预测词或由词预测上下文。GloVe 通过加权目标拟合向量关系与全局共现次数对数。三者都利用分布规律，但维度、优化及保留信息不同，也都不会自动区分所有词义或消除社会偏见。"
    },
    {
      "id": "L15",
      "code": "06",
      "topic": "Embedding limitations",
      "q": "Explain why similar embeddings do not necessarily mean two words are interchangeable.",
      "a": "Distributional similarity reflects shared contexts, which can bring antonyms or topically related words close together. A static vector also averages across a word’s senses, and simple composition may ignore order or negation. For example, “hot” and “cold” occur in similar temperature descriptions but express opposite values. Contextual representations and task-specific evaluation help, but a high similarity or analogy score alone is not evidence of full semantic understanding.",
      "zh": "得分点：反义/主题关联；多义；具体例子；内在评价边界。",
      "source": "W06 pp.21-28,47-50,80-94; E25 Q16-17",
      "qZh": "解释为什么嵌入相似不代表两个词能互换。",
      "aZh": "分布相似性反映共享上下文，因此反义词或主题相关词也可能靠得很近。静态向量还会混合多个词义，而简单组合可能忽略词序和否定。例如 hot 和 cold 都常出现在温度描述中，但表达相反值。上下文化表示与任务特定评价有帮助，不过高相似度或类比分数本身不能证明完整语义理解。"
    },
    {
      "id": "L16",
      "code": "06",
      "topic": "Contextualisation",
      "q": "Compare word2vec, ELMo and BERT as word-representation approaches.",
      "a": "Word2vec usually assigns one learned vector per word type, so occurrences with different senses share a representation. ELMo derives context-sensitive features from bidirectional recurrent language models. BERT instead learns deeply bidirectional transformer representations through masked-token pretraining, with task adaptation often performed by fine-tuning. The contextual models can distinguish uses of the same word, but require more computation and still inherit limitations from their objectives and training data.",
      "zh": "得分点：static/contextual；RNN/Transformer；训练目标；收益与成本。",
      "source": "W06 pp.56-94; W09 pp.6-25",
      "qZh": "比较 word2vec、ELMo 和 BERT 的词表示方法。",
      "aZh": "Word2vec 通常为每个词型分配一个向量，因此不同词义的出现共享表示。ELMo 从双向循环语言模型中获得上下文敏感特征。BERT 则通过掩码 token 预训练学习深层双向 Transformer 表示，并常通过微调适应任务。上下文模型能区分同一词的不同用法，但计算更多，仍受目标和训练数据的局限影响。"
    },
    {
      "id": "L17",
      "code": "07",
      "topic": "Sparse versus dense retrieval",
      "q": "Compare sparse and dense retrieval, giving three practical trade-offs.",
      "a": "Sparse lexical methods are efficient with inverted indexes, expose interpretable term matches and handle exact identifiers well, but can miss paraphrases without shared vocabulary. Dense retrievers can bridge vocabulary mismatch, reuse pretrained semantic representations and support vector search, but depend on training coverage and can blur exact distinctions. Their costs also differ: sparse term expansion increases postings, while dense vectors and approximate indexes consume storage and may lose neighbours. A hybrid can combine complementary evidence, but its value must be checked on held-out queries against added latency and memory.",
      "zh": "三组对照：匹配能力、可解释/领域泛化、索引与运行成本；避免把 sparse 和 dense 写成绝对好坏。",
      "source": "W07 pp.60-95; E25 Q21",
      "qZh": "比较稀疏与稠密检索，给出三项实际权衡。",
      "aZh": "稀疏词汇方法可借倒排索引高效运行，词项匹配可解释，善于处理精确标识符，但没有共享词汇时可能遗漏改写。稠密检索能弥合词汇差异、复用预训练语义表示并支持向量搜索，但依赖训练覆盖，也可能模糊精确区别。成本也不同：稀疏扩展增加倒排项，稠密向量与近似索引消耗存储且可能丢失邻居。混合方法可结合互补证据，但需在留出查询上对照新增延迟与内存验证价值。"
    },
    {
      "id": "L18",
      "code": "07",
      "topic": "Retrieval pipeline",
      "q": "Design a practical retrieval pipeline for a large technical-document collection.",
      "a": "I would begin with a fast lexical or dual-encoder stage to obtain a candidate set, retaining exact identifier matching when technical names matter. A cross-encoder could then rerank the smaller set using detailed query-document interactions, or late interaction could provide an intermediate cost-quality choice. Candidate depth should be tuned on development queries because deeper retrieval may improve coverage while increasing reranking latency. I would measure rank-sensitive effectiveness, candidate recall and per-query runtime, and inspect failures where the relevant document never reaches the expensive stage.",
      "zh": "得分点：分阶段理由；模型选择匹配任务；调 k 的权衡；检索失败与重排失败分开。",
      "source": "W07 pp.48-74,94-95",
      "qZh": "为大型技术文档集合设计一个实际可用的检索流程。",
      "aZh": "我会先用快速词汇或双编码器阶段获得候选集；技术名称重要时保留精确标识符匹配。然后用交叉编码器对较小集合进行细粒度重排，或用后期交互取得中间成本—效果折中。候选深度应在开发查询上调节，因为更多候选可提升覆盖，也会增加重排延迟。我会衡量排名敏感效果、候选召回率和逐查询耗时，并检查相关文档未能进入昂贵阶段的失败案例。"
    },
    {
      "id": "L19",
      "code": "07",
      "topic": "Training and fusion",
      "q": "Explain why a retriever trained only with random negatives may struggle, and suggest two remedies.",
      "a": "Random negatives are often obviously unrelated, so the model can learn coarse separation without distinguishing plausible competing passages. Hard negatives from BM25 or the current dense retriever force finer semantic and lexical discrimination. Retrieval-specific contrastive pretraining can improve whole-sequence representations before supervised adaptation, while rank fusion can combine complementary systems at inference. However, hard negatives may include unjudged relevant documents and fusion adds cost, so both training data quality and held-out effectiveness must be checked.",
      "zh": "得分点：random 太容易；hard negatives；表征或融合补救；false negative 风险。",
      "source": "W07 pp.70-93",
      "qZh": "为什么只用随机负例训练的检索器可能表现不佳？提出两种补救方法。",
      "aZh": "随机负例通常明显无关，模型可能只学会粗略分离，而不会区分看似合理的竞争段落。BM25 或当前稠密检索器产生的困难负例可迫使模型学习更细的语义和词汇区别。检索专用对比预训练能在监督适配前改善整段表示；推理时的排名融合也能组合互补系统。但困难负例可能包含未被标注的相关文档，融合又增加成本，因此需检查训练数据质量和留出效果。"
    },
    {
      "id": "L20",
      "code": "08",
      "topic": "Choosing retrieval metrics",
      "q": "Choose evaluation metrics for binary-relevance retrieval and justify why several metrics are needed.",
      "a": "I would use MAP to evaluate how relevant documents are distributed across the ranking and an early-rank measure such as MRR or precision at a small cutoff to reflect likely user inspection. Recall at the candidate depth is also useful when the results feed a reranker or RAG generator that needs adequate evidence coverage. These measures answer different questions: MRR stops at the first relevant item, while recall ignores ordering and MAP captures more of the ranked relevant set. F1 alone misses ranking quality, and although binary nDCG is mathematically valid, a graded-gain rationale is weak when the task only supplies binary judgments.",
      "zh": "得分点：指标与使用场景对应；二值标签；排名与召回；不把 F1/nDCG 的适用性混为绝对数学禁令。",
      "source": "W08 pp.39-45; course A2 clarification; E25 Q20",
      "qZh": "为二值相关性检索选择指标，并说明为何需要多个指标。",
      "aZh": "我会用 MAP 评价相关文档在排名中的整体分布，再用 MRR 或较小截断处的精确率反映用户对前列结果的查看。当结果供重排器或 RAG 使用时，候选深度处的召回率也能衡量证据覆盖。指标回答不同问题：MRR 只看首个相关结果，召回率忽略顺序，MAP 考虑更多相关结果的位置。单独 F1 无法衡量排名质量；虽然二值 nDCG 数学上有效，但只有二值判断时，分级收益的选择理由较弱。"
    },
    {
      "id": "L21",
      "code": "08",
      "topic": "RAG error analysis",
      "q": "Two RAG systems have the same mean answer score. How would you determine whether their behaviour is actually the same?",
      "a": "I would compare per-query outcomes, including which questions only one system answers correctly, rather than relying on the mean. For each failure, I would inspect whether sufficient evidence was retrieved, whether it survived reranking or truncation, and whether the generator used it correctly. Controlled changes such as supplying gold evidence or swapping retrievers can help separate retrieval and generation effects, although they must be reported as diagnostic interventions. I would also stratify by question type and evidence requirements and use paired uncertainty estimates, because identical averages can hide different failure mechanisms.",
      "zh": "得分点：paired query-level 对比；缺证据/有证据不用/推理错；控制实验；分层与不确定性。",
      "source": "W08 pp.90-95; W11 pp.91-98; uncertainty analysis is a methodological extension",
      "qZh": "两个 RAG 系统的平均答案得分相同，如何判断行为是否真的相同？",
      "aZh": "我会比较逐查询结果，包括只有某一个系统回答正确的问题，而不是只看平均数。对每次失败，检查充分证据是否被检索到、是否通过重排或截断保留，以及生成器是否正确利用。提供金标准证据或交换检索器等受控改动，有助于区分检索和生成影响，但必须明确报告为诊断干预。还应按问题类型和证据需求分层，并使用配对不确定性估计，因为同样均值可能隐藏不同失败机制。"
    },
    {
      "id": "L22",
      "code": "08",
      "topic": "RAG versus parametric knowledge",
      "q": "Compare closed-book QA, retrieval-augmented QA and knowledge-base semantic parsing.",
      "a": "Closed-book QA uses information stored in model parameters, making it simple but difficult to keep current or verify. RAG supplies retrieved textual evidence at query time, supporting new or private knowledge but introducing retrieval and grounding failures. Semantic parsing translates a question into a formal query over a structured knowledge base, enabling precise execution when the schema and facts cover the request. The appropriate choice depends on information freshness, source format, coverage, acceptable latency and how strongly answers must be supported by evidence.",
      "zh": "得分点：知识位置；更新方式；局限；任务驱动选择。",
      "source": "W08 pp.51-89; W11 pp.73-98",
      "qZh": "比较闭卷问答、检索增强问答与知识库语义分析。",
      "aZh": "闭卷问答使用模型参数中的信息，流程简单，但难以更新或核实。RAG 在查询时提供文本证据，可支持新知识或私有知识，却引入检索和依据使用错误。语义分析把问题转换为结构化知识库上的形式查询，当模式和事实覆盖需求时可以精确执行。选择取决于信息时效、来源格式、覆盖率、可接受延迟和证据要求。"
    },
    {
      "id": "L23",
      "code": "09",
      "topic": "Attention architecture",
      "q": "Explain multi-head attention and discuss its advantages and limitations.",
      "a": "Each head forms separate query, key and value projections and computes an attention-weighted combination of values. Combining several heads allows one token to attend to different positions or representation subspaces at once, supporting relationships that one attention distribution might mix together. With a fixed total width, splitting into heads does not automatically multiply all parameter or arithmetic costs, but dense attention still has a quadratic sequence-length component and intermediate attention storage can be costly. The heads are learned rather than assigned linguistic roles, so visualising one head is not by itself a complete explanation of the model’s decision.",
      "zh": "得分点：QKV + softmax + 合并；多关系优势；固定宽度下成本的准确说法；解释性限制。",
      "source": "W09 pp.41-55,98-100; E25 Q22",
      "qZh": "解释多头注意力，并讨论其优势与局限。",
      "aZh": "每个头进行独立 Q、K、V 投影，再计算注意力加权的 value 组合。组合多个头允许同一 token 同时关注不同位置或表示子空间，捕捉单一分布可能混在一起的关系。总宽度固定时，拆分多头不会自动使全部参数或计算成本成倍增加，但稠密注意力仍有关于长度的二次项，中间注意力存储也可能昂贵。各头是学习得到的，而非预先指定语言学角色，因此可视化一个头并不是模型决策的完整解释。"
    },
    {
      "id": "L24",
      "code": "09",
      "topic": "Transformer versus recurrence",
      "q": "Compare RNNs and transformers in their treatment of order, long-range interactions and computation.",
      "a": "An RNN processes tokens through a recurrent hidden state, so order is built into the computation but training has a sequential dependency across time. A transformer uses direct attention interactions and can process training positions in parallel, but needs explicit positional information. Standard dense attention has O(n²d) mixing cost, while a fixed-width RNN has linear sequence-length work with an O(d²) per-step component. Transformers shorten information paths across distant tokens, yet their memory cost and sequential autoregressive decoding remain important limitations.",
      "zh": "得分点：顺序来源；长程路径；复杂度含前提；训练并行不等于生成所有词并行。",
      "source": "W09 pp.63-79,98-100; E25 Q26",
      "qZh": "比较 RNN 和 Transformer 对顺序、长距离交互及计算的处理。",
      "aZh": "RNN 通过循环隐藏状态处理 token，计算本身编码了顺序，但训练存在跨时间的顺序依赖。Transformer 使用直接注意力交互，可并行处理训练位置，但需显式位置信息。标准稠密注意力混合成本为 O(n²d)；固定宽度 RNN 随长度线性增长，每步有 O(d²) 成本。Transformer 缩短了远距离 token 的信息路径，但内存成本和顺序自回归解码仍是重要限制。"
    },
    {
      "id": "L25",
      "code": "09",
      "topic": "Pretraining and adaptation",
      "q": "Compare pretraining, full fine-tuning, ordinary prompting and prompt tuning.",
      "a": "Pretraining learns broad representations or predictive behaviour from large corpora, while full fine-tuning updates those weights for a downstream task. Ordinary prompting supplies instructions or examples in the input without changing weights, allowing one frozen model to serve many tasks. Prompt tuning learns a small set of continuous task-specific embeddings while leaving the main model frozen. The methods trade adaptation capacity, data requirements, training and storage costs, and inference prompt length, so none should be assumed best without task-specific evaluation.",
      "zh": "得分点：哪些参数变；输入示例和训练样本的区别；存储/成本/效果权衡。",
      "source": "W09 pp.18-25,84-90; E25 Q24; E24 Q31-32",
      "qZh": "比较预训练、完整微调、普通提示和提示微调。",
      "aZh": "预训练从大语料学习广泛表示或预测行为；完整微调为下游任务更新这些权重。普通提示把指令或示例加入输入而不改变权重，使一个冻结模型支持多个任务。提示微调只学习少量任务专用连续嵌入，冻结主模型。这些方法在适配能力、数据需求、训练和存储成本、推理提示长度之间取舍，不能脱离任务评价认定某一种最好。"
    },
    {
      "id": "L26",
      "code": "09",
      "topic": "Alignment",
      "q": "Explain how a next-token model is adapted into an instruction-following assistant and why this does not guarantee safe or truthful outputs.",
      "a": "Pretraining learns plausible continuations rather than an explicit requirement to obey instructions or provide verified facts. SFT teaches desired response patterns from instruction-answer pairs, and preference optimisation such as RLHF or DPO shifts behaviour toward preferred responses. These procedures depend on the quality and coverage of demonstrations and preference judgments, and an imperfect reward can favour convincing but incorrect text. Robust deployment therefore also needs grounded evaluation, appropriately scoped tools, safety controls and monitoring of failure cases.",
      "zh": "得分点：base model 目标；SFT；偏好对齐；局限和下游措施。",
      "source": "W09 pp.92-96; W12 pp.82-89; E25 Q27",
      "qZh": "解释下一 token 模型如何成为指令助手，以及为什么仍不保证安全与真实。",
      "aZh": "预训练学习合理续写，而不是明确学习遵从指令或提供经过验证的事实。SFT 用指令—答案对教会期望回答模式，RLHF 或 DPO 等偏好优化再使行为倾向受偏好回答。结果依赖示例和偏好判断的质量与覆盖；不完美奖励可能偏好令人信服但错误的文本。因此，可靠部署还需要有依据的评价、适当限制的工具、安全控制和失败监测。"
    },
    {
      "id": "L27",
      "code": "09",
      "topic": "Serving efficiency",
      "q": "Discuss three ways that modern transformer variants change the compute-memory trade-off.",
      "a": "KV caching avoids recomputing past keys and values during autoregressive decoding but uses memory proportional to stored context. GQA or MQA reduces distinct KV heads, shrinking that cache without reducing the number of query heads. MoE activates only selected expert networks per token, reducing active arithmetic relative to evaluating all experts but still requiring access to the total expert parameters. These methods address different bottlenecks, so their value depends on context length, batch size, hardware bandwidth and routing overhead rather than parameter count alone.",
      "zh": "得分点：每种优化省什么、花什么；不要将 KV cache、GQA、MoE 混成同一种压缩。",
      "source": "W09 pp.76-79,104-107",
      "qZh": "讨论现代 Transformer 变体改变计算—内存权衡的三种方法。",
      "aZh": "KV cache 避免自回归解码重复计算过去的 key/value，但内存与保存的上下文长度成正比。GQA/MQA 减少不同 KV 头，在不减少 query 头的情况下缩小缓存。MoE 每个 token 只激活部分专家，相比计算全部专家减少活跃算术量，但仍需要能够访问全部专家参数。这些方法针对不同瓶颈，价值取决于上下文长度、批次大小、硬件带宽和路由开销，而非只看参数量。"
    },
    {
      "id": "L28",
      "code": "11",
      "topic": "Decoding choices",
      "q": "Compare greedy decoding, beam search and sampling for generation.",
      "a": "Greedy decoding chooses the best next token and is cheap, but can discard a prefix whose later continuation would be better. Beam search retains several prefixes and approximates high-probability sequence search, yet wider beams can favour generic or prematurely ended outputs when the scoring objective is imperfect. Sampling instead introduces diversity, with top-k, nucleus filtering and temperature controlling which tokens remain plausible. I would choose according to the task and evaluate both correctness and output behaviour, since maximum model probability is not identical to human quality.",
      "zh": "得分点：搜索 vs 采样；local/global；计算与多样性；任务匹配。",
      "source": "W11 pp.8-46",
      "qZh": "比较生成中的贪心解码、束搜索与采样。",
      "aZh": "贪心每步选最佳 token，成本低，但可能丢掉后续更好的前缀。束搜索保留多个前缀，近似寻找高概率序列；当目标不完美时，更宽束可能偏好通用或过早结束的输出。采样引入多样性，top-k、核过滤和温度控制哪些 token 仍有可能。我会按任务选择，并同时评价正确性和输出行为，因为最大模型概率并不等同于人的质量判断。"
    },
    {
      "id": "L29",
      "code": "11",
      "topic": "QA architecture and data",
      "q": "Design a QA system and explain how the answer source constrains its architecture.",
      "a": "I would first specify the question domain, expected answer form and available source, such as a supplied passage, structured database or large document collection. A supplied passage permits a span reader, a database can support semantic parsing and execution, and a large text collection requires retrieval before reading or generation. The training data and evaluation must match that choice, including unanswerable cases and evidence requirements. Errors should then be traced to source coverage, retrieval, representation or prediction rather than treating every wrong answer as the same model failure.",
      "zh": "得分点：先定义任务；source 决定 pipeline；数据和指标；失败归因。",
      "source": "W11 pp.58-105",
      "qZh": "设计问答系统，并解释答案来源如何限制架构。",
      "aZh": "首先明确问题领域、预期答案形式和可用来源，例如给定段落、结构化数据库或大型文档集合。给定段落适合片段阅读器，数据库适合语义分析加执行，大文本集合则需先检索再阅读或生成。训练数据和评价应匹配该选择，包括不可回答情况和证据要求。错误应追溯到来源覆盖、检索、表示或预测，而不是把所有错误都视作同一种模型失败。"
    },
    {
      "id": "L30",
      "code": "11",
      "topic": "Dataset shortcuts",
      "q": "A visual-QA model performs well while ignoring images. Explain the problem and propose an evaluation remedy.",
      "a": "The model may exploit correlations between question wording and common answers, such as always predicting “yellow” for bananas. High aggregate accuracy then measures a dataset shortcut rather than genuine use of visual evidence. A question-only baseline reveals how much performance can be obtained without images, and paired examples with similar questions but different correct visual answers make the shortcut less reliable. I would compare performance on these contrastive pairs and inspect whether changing only the image changes the prediction appropriately.",
      "zh": "得分点：language prior；baseline；配对反例；改变输入验证依赖关系。",
      "source": "W11 pp.99-105",
      "qZh": "视觉问答模型不看图像却得分很高，问题是什么？如何改进评价？",
      "aZh": "模型可能利用问题措辞与常见答案的相关性，例如香蕉问题一律回答黄色。高总体准确率因此衡量的是数据捷径，而非真正使用视觉证据。只看问题的基线能显示没有图像也能获得多少分；相似问题配不同正确视觉答案的样本对可削弱捷径。我会比较这些对照样本上的表现，检查只改变图像时预测是否合理改变。"
    },
    {
      "id": "L31",
      "code": "12",
      "topic": "Bias and feedback",
      "q": "Explain how algorithmic bias can arise in an NLP pipeline and give two concrete examples.",
      "a": "Bias can enter through historical labels, selective data collection, representations, task definitions, objectives or deployment feedback. A CV screener trained on past discriminatory hiring decisions may deny opportunities to a group, creating allocational harm. A model that repeatedly portrays one demographic as a stereotypical occupation creates representational harm even without making an allocation decision. Evaluation should therefore examine group-specific outcomes and causal mechanisms, rather than assuming that a large dataset or high overall accuracy makes the system objective.",
      "zh": "得分点：至少两种来源；两个具体应用；伤害类型；分群检查。",
      "source": "W12 pp.5-34; E24 Q37; E25 Q27-28",
      "qZh": "解释算法偏见如何进入 NLP 流程，并给出两个具体例子。",
      "aZh": "偏见可来自历史标签、选择性收集、表示、任务定义、目标或部署反馈。用过去歧视性招聘决策训练的简历筛选器，可能拒绝某群体的机会，造成分配性伤害。反复把某人口群体描述为某刻板职业的模型，即使不作资源分配，也会造成表征性伤害。因此需检查群体特定结果和因果机制，不能因大数据集或高总体准确率就认定系统客观。"
    },
    {
      "id": "L32",
      "code": "12",
      "topic": "Annotation quality",
      "q": "Describe a rigorous annotation workflow and explain the role and limits of agreement metrics.",
      "a": "I would define labels and edge cases in written guidelines, pilot them, and have diverse annotators independently label overlapping items. Observed agreement and chance-corrected statistics such as Cohen’s or Fleiss’ kappa reveal consistency problems that raw agreement can hide under class imbalance. Disagreements should prompt guideline revision or adjudication, with an audit of the adjudicator’s decisions where stakes justify it. High agreement is useful evidence of consistency, but annotators can share the same bias, so it does not prove that the labels are true or fair.",
      "zh": "得分点：独立标注；pilot；κ 校正机会一致；adjudication；一致不等于正确。",
      "source": "W12 pp.50-79",
      "qZh": "描述严谨的标注流程，并说明一致性指标的作用与局限。",
      "aZh": "我会书面定义标签与边界情况，先试标注，再由背景多样的标注者独立标注重叠项目。观察一致率和 Cohen/Fleiss κ 等机会校正指标，可以揭示类别不平衡下原始一致率掩盖的问题。分歧应促使修订指南或裁决；风险较高时，还需审核裁决者的决定。高一致性有助于证明稳定，但标注者可能共享偏见，因此不能证明标签真实或公平。"
    },
    {
      "id": "L33",
      "code": "12",
      "topic": "Fairness versus utility",
      "q": "Why is a low intrinsic bias score or a small group error gap insufficient to declare a system fair?",
      "a": "An intrinsic measure such as WEAT only tests selected associations in a representation and may not predict downstream discrimination. A small group error gap can also be obtained by making a classifier equally poor for everyone. Fairness evaluation should therefore report task utility and relevant group outcomes together, justify the chosen fairness criterion, and inspect residual information or failure patterns. Trade-offs between calibration and error-rate parity under different base rates further show why one number cannot settle every normative question.",
      "zh": "得分点：intrinsic/downstream；公平但无用的反例；多维评价；标准冲突。",
      "source": "W12 pp.17-21,37-48,105-112; Chouldechova 2017 clarification",
      "qZh": "为什么低内在偏见得分或小群体错误差距不足以宣称公平？",
      "aZh": "WEAT 等内在指标只检验表示中选定的关联，未必预测下游歧视。让分类器对所有人都同样差，也能得到很小的群体错误差距。因此应同时报告任务效用和相关群体结果，说明公平标准的理由，并检查残余信息和错误模式。不同基础率下校准与错误率平等的权衡，更说明一个数字不能解决全部规范性问题。"
    },
    {
      "id": "L34",
      "code": "12",
      "topic": "Privacy and unlearning",
      "q": "Discuss privacy risks in NLP data use and compare exact and approximate machine unlearning.",
      "a": "Text may contain identifiable or sensitive information, and a trained model can memorise or reveal it even after the raw record is deleted. Data minimisation, justified collection, access controls and clear retention practices reduce exposure but do not by themselves erase learned influence. Retraining without the affected data supplies an exact reference, whereas approximate unlearning attempts a cheaper parameter change and requires careful validation of residual leakage and retained utility. Legal rights and exceptions depend on context, while the ethical responsibility to consider downstream harm goes beyond merely satisfying a checklist.",
      "zh": "得分点：训练数据泄漏；收集与保留；exact/approximate；验证；伦理与法律边界。",
      "source": "W12 pp.29,92-115; E24 Q35-36; E25 Q29",
      "qZh": "讨论 NLP 数据使用的隐私风险，并比较精确与近似机器遗忘。",
      "aZh": "文本可能含身份或敏感信息，即使原记录被删，模型仍可能记忆或泄露。数据最小化、合理收集、访问控制和明确保留期限能减少暴露，但不会自动消除已学习影响。排除相关数据重新训练提供精确参照；近似遗忘尝试更廉价的参数改动，需验证残余泄漏和保留效用。法律权利与例外取决于情境，而考虑下游伤害的伦理责任超出了清单式合规。"
    },
    {
      "id": "L35",
      "code": "12",
      "topic": "Indirect prompt injection",
      "q": "A document assistant filters user prompts but leaks confidential data after reading a retrieved page. Explain why and propose safeguards.",
      "a": "The malicious instruction entered through retrieved content, so a filter applied only to the user’s prompt did not cover the attack surface. The system should treat external text as untrusted data rather than authority, and restrict tools and records to the minimum access needed for the task. Content and output checks can detect some attempts or sensitive disclosures, while explicit boundaries and human approval are useful for consequential actions. These safeguards reduce risk but must be tested together because no single guardrail guarantees that every injection or leak will be blocked.",
      "zh": "得分点：间接入口；数据/指令分离；最小权限；输入与输出；不承诺完美安全。",
      "source": "W12 pp.82-89",
      "qZh": "文档助手过滤了用户提示，却在读取检索网页后泄露机密，为什么？如何防护？",
      "aZh": "恶意指令通过检索内容进入，因此只作用于用户提示的过滤器没有覆盖整个攻击面。系统应把外部文本视为不可信数据而非权威，并把工具与记录权限限制在任务所需最小范围。内容和输出检查能识别部分攻击或敏感泄露；明确边界以及对重大操作采用人工批准也有用。这些措施降低风险，但必须组合测试，因为单一护栏不保证阻止所有注入或泄露。"
    },
    {
      "id": "L36",
      "code": "X",
      "topic": "Cross-topic experimental reasoning",
      "q": "A new NLP system improves the mean score by a small amount. What evidence would make the improvement convincing?",
      "a": "I would first check identical data splits, preprocessing and scoring conventions, and confirm that no test examples influenced model selection. Paired per-example comparisons reveal whether the gain is broad or driven by a small subgroup, while uncertainty estimates quantify how stable it is across sampled test items. An ablation or controlled component swap can test the proposed explanation rather than merely associating the new design with the gain. I would also report runtime, memory and relevant harm metrics, since a modest average gain may not justify a much more costly or inequitable system.",
      "zh": "得分点：公平比较；paired errors；不确定性；控制实验；成本和伤害。置信区间是复习扩展方法，不冒充样卷原题。",
      "source": "W02 pp.30-33; W07 pp.48-64; W08 pp.23-48,90-95; W12 pp.109-112",
      "qZh": "新 NLP 系统的平均分只小幅提高，什么证据能让改进更可信？",
      "aZh": "首先检查数据划分、预处理和计分约定是否相同，并确认测试样本没有影响模型选择。逐样本配对比较揭示提升是广泛发生还是由少数子群体驱动，不确定性估计量化其对测试样本抽样的稳定性。消融或受控组件交换能检验提出的解释，而不只是把新设计与提升联系起来。还应报告耗时、内存和相关伤害指标，因为小幅平均增益未必值得很大的额外成本或不公平。"
    }
  ],
  "calculations": [
    {
      "id": "C01",
      "topic": "Chain rule and bigram probability",
      "q": "A bigram model gives P(do|I)=0.33, P(not|do)=0.5 and P(like|not)=0.25. Score the continuation “do not like” given “I”. Then include P(I|START)=0.2 and P(END|like)=0.1.",
      "formula": "P(w1...wT) = product_t P(w_t | w_1...w_(t-1))\nBigram: replace full history by the previous token.",
      "steps": [
        "Conditional continuation: 0.33 × 0.5 × 0.25 = 0.04125.",
        "With the supplied start and end factors: 0.2 × 0.04125 × 0.1 = 0.000825.",
        "A log score is the sum of the logs of exactly the same factors."
      ],
      "result": "Continuation probability = 0.04125; complete boundary-aware probability = 0.000825.",
      "zh": "原样卷只给三个条件概率，因此 0.04125 默认是给定 I 的延续概率，或隐含首尾因子为 1。不能自己补未给概率。",
      "source": "W02 pp.4-23; E24 Q4",
      "practice": "If three continuation probabilities are 0.5, 0.2 and 0.1, what is their joint continuation probability?",
      "key": "0.01.",
      "level": "Core practice",
      "topicZh": "链式法则与二元概率",
      "qZh": "二元模型给出 P(do∣I)=0.33、P(not∣do)=0.5、P(like∣not)=0.25。计算给定 I 时续写 do not like 的概率；再加入 P(I∣START)=0.2 和 P(END∣like)=0.1。",
      "formulaZh": "完整序列概率是各位置条件概率之积；二元近似仅用前一个 token 代替全部历史。",
      "stepsZh": [
        "条件续写概率：0.33×0.5×0.25=0.04125。",
        "乘上给定首尾因子：0.2×0.04125×0.1=0.000825。",
        "对数得分是完全相同的各概率因子的对数之和。"
      ],
      "resultZh": "续写概率为 0.04125；包含边界的完整概率为 0.000825。",
      "practiceZh": "三个续写条件概率为 0.5、0.2、0.1，联合续写概率是多少？",
      "keyZh": "0.01。",
      "tipEn": "The original example supplies only three conditionals: 0.04125 is conditional on I unless boundary factors are implicitly 1. Do not invent missing probabilities."
    },
    {
      "id": "C02",
      "topic": "MLE, Laplace smoothing and effective counts",
      "q": "A history h occurs 10 times. Its three possible next tokens A, B and C have counts 6, 4 and 0. Compute MLE, add-one probabilities and the effective smoothed count for A.",
      "formula": "P_MLE(w|h)=C(h,w)/C(h)\nP_add1(w|h)=(C(h,w)+1)/(C(h)+V)\nc*(h,w)=P_add1(w|h) × C(h)",
      "steps": [
        "MLE is (6/10, 4/10, 0/10) = (0.6, 0.4, 0).",
        "The smoothed denominator is 10+3=13, giving (7/13, 5/13, 1/13).",
        "The values sum to 1. The effective count of A is 10×7/13 = 70/13, approximately 5.3846."
      ],
      "result": "Add-one probabilities ≈ (0.5385, 0.3846, 0.0769); c*(A) ≈ 5.3846.",
      "zh": "effective count 不是 C+1；它是平滑概率乘回原历史计数。词表大小 V 要包含允许的全部后继。",
      "source": "W02 pp.58-66; sample formula appendices",
      "practice": "With counts (2,0), history count 2 and V=2, what are add-one probabilities?",
      "key": "(3/4, 1/4).",
      "level": "Core practice",
      "topicZh": "最大似然、加一平滑与有效计数",
      "qZh": "历史 h 出现 10 次，三个可能后续 token A、B、C 的计数分别为 6、4、0。计算 MLE、加一平滑概率和 A 的平滑有效计数。",
      "formulaZh": "MLE=共同出现次数/历史次数；加一平滑同时给分子加 1、分母加词表大小 V；有效计数=平滑概率×原历史次数。",
      "stepsZh": [
        "MLE=(6/10,4/10,0/10)=(0.6,0.4,0)。",
        "平滑分母为 10+3=13，概率为 (7/13,5/13,1/13)。",
        "概率和为 1；A 的有效计数为 10×7/13=70/13≈5.3846。"
      ],
      "resultZh": "加一概率约为 (0.5385,0.3846,0.0769)，A 的有效计数约为 5.3846。",
      "practiceZh": "计数为 (2,0)，历史计数为 2，V=2，加一平滑概率是多少？",
      "keyZh": "(3/4,1/4)。",
      "tipEn": "An effective count is not C+1; multiply the smoothed probability by the original history count. V includes all permitted continuations."
    },
    {
      "id": "C03",
      "topic": "Interpolation, backoff and cache mixture",
      "q": "For one next token, trigram, bigram and unigram probabilities are 0.2, 0.1 and 0.01. Use weights 0.5, 0.3 and 0.2. Also score stupid backoff if both trigram and bigram are unseen; finally mix a base LM probability 0.1 with cache probability 0.4 using base weight 0.75.",
      "formula": "P_interp = λ3 P3 + λ2 P2 + λ1 P1\nUnseen backoff step: S_n = 0.4 S_(n-1)\nP_cache_mix = λ P_base + (1-λ) P_cache",
      "steps": [
        "Interpolation: 0.5×0.2 + 0.3×0.1 + 0.2×0.01 = 0.132.",
        "Two backoff steps: 0.4²×0.01 = 0.0016. This is a score, not necessarily a normalised probability.",
        "Cache mixture: 0.75×0.1 + 0.25×0.4 = 0.175."
      ],
      "result": "Interpolated probability 0.132; backoff score 0.0016; cache mixture 0.175.",
      "zh": "检查权重和为 1；backoff 回退几层就乘几次 0.4。不同公式中的 λ 可能定义为不同分量权重。",
      "source": "W02 pp.69-77",
      "practice": "Mix probabilities 0.4 and 0.1 with respective weights 0.2 and 0.8.",
      "key": "0.16.",
      "level": "Core practice",
      "topicZh": "插值、回退与缓存混合",
      "qZh": "某 token 的三元、二元、一元概率为 0.2、0.1、0.01，对应权重 0.5、0.3、0.2。计算插值概率；若三元和二元都未见，计算 stupid backoff 得分；最后以基础模型权重 0.75 混合基础概率 0.1 和缓存概率 0.4。",
      "formulaZh": "插值对不同阶概率加权求和；每回退一级乘 0.4；缓存混合为 λP基础+(1−λ)P缓存。",
      "stepsZh": [
        "插值：0.5×0.2+0.3×0.1+0.2×0.01=0.132。",
        "回退两级：0.4²×0.01=0.0016。它是得分，不一定是归一化概率。",
        "缓存混合：0.75×0.1+0.25×0.4=0.175。"
      ],
      "resultZh": "插值概率 0.132；回退得分 0.0016；缓存混合概率 0.175。",
      "practiceZh": "将概率 0.4、0.1 按权重 0.2、0.8 混合。",
      "keyZh": "0.16。",
      "tipEn": "Check that mixture weights sum to one. Each backoff level contributes one factor of 0.4; lambda may refer to different components in different formulas."
    },
    {
      "id": "C04",
      "topic": "Perplexity and cross-entropy",
      "q": "Four observed tokens each receive probability 1/4. Compute the sequence probability, mean surprisal in bits and perplexity. What happens if an unsmoothed model assigns zero to one observed token?",
      "formula": "H = -(1/N) sum_i log_b p_i\nPP = b^H = (product_i p_i)^(-1/N)",
      "steps": [
        "Sequence probability = (1/4)^4 = 1/256.",
        "Each surprisal is -log2(1/4)=2 bits, so the mean is 2.",
        "PP = 2² = 4. A zero probability makes negative log likelihood and perplexity infinite."
      ],
      "result": "P(sequence)=1/256; mean surprisal=2 bits; PP=4.",
      "zh": "N 是被计分 token 数；用 log10 则 PP=10^H，用 ln 则 PP=exp(H)。边界是否计入必须统一。",
      "source": "W02 pp.34-41; W08 pp.33-37; E25 Q4",
      "practice": "Two tokens have probabilities 1/2 and 1/8. What is PP?",
      "key": "Product=1/16; PP=(1/16)^(-1/2)=4.",
      "level": "Core practice",
      "topicZh": "困惑度与交叉熵",
      "qZh": "实际观察到的四个 token 各被赋予 1/4 概率。计算序列概率、以 bit 计的平均惊异度和困惑度。若未平滑模型给其中一个实际 token 零概率，会怎样？",
      "formulaZh": "平均负对数概率 H=−Σlog_b(p_i)/N；困惑度 PP=b^H，也等于概率乘积的 −1/N 次幂。",
      "stepsZh": [
        "序列概率=(1/4)^4=1/256。",
        "每个 token 惊异度为 −log2(1/4)=2 bits，平均也为 2。",
        "PP=2²=4；零概率会使负对数似然与困惑度趋于无穷大。"
      ],
      "resultZh": "序列概率 1/256；平均惊异度 2 bits；PP=4。",
      "practiceZh": "两个 token 的概率为 1/2、1/8，PP 是多少？",
      "keyZh": "乘积为 1/16，PP=(1/16)^(−1/2)=4。",
      "tipEn": "N counts scored tokens. Use PP=10^H for log10 and exp(H) for natural logs; keep boundary scoring conventions consistent."
    },
    {
      "id": "C05",
      "topic": "Counting n-grams and search paths",
      "q": "A vocabulary contains 100 types. How many possible bigrams and trigrams exist before boundary constraints? How many length-5 continuations exist? Compare brute-force tagging with a first-order Viterbi algorithm for T=20 and K=10.",
      "formula": "Possible n-grams: |V|^n\nTag paths: K^T\nViterbi transition comparisons: approximately (T-1)K²",
      "steps": [
        "Bigrams: 100²=10,000. Trigrams: 100³=1,000,000.",
        "Length-5 continuations: 100^5=10^10.",
        "Tag paths: 10^20. Viterbi performs about 19×100=1,900 transition comparisons, plus initialisation, emissions and termination."
      ],
      "result": "Combinatorial spaces grow rapidly even when vocabulary size stays fixed.",
      "zh": "“指数增长”要指出相对于哪个变量；固定 n 时 V^n 是关于 V 的多项式。",
      "source": "W02 pp.50-55; W03 pp.68-83; W11 pp.8-11",
      "practice": "For K=4 states and T=3 observations, how many full tag paths exist?",
      "key": "4³=64, compared with 2×4²=32 transition comparisons in the dense recurrence.",
      "level": "Core practice",
      "topicZh": "n-gram 和搜索路径计数",
      "qZh": "词表有 100 个词型。不考虑边界限制时，可能的二元、三元组合有多少？长度 5 的续写有多少？对 T=20、K=10，比较暴力标注与一阶 Viterbi。",
      "formulaZh": "可能 n-gram 数为 |V|^n；标签路径数为 K^T；Viterbi 转移比较次数约为 (T−1)K²。",
      "stepsZh": [
        "二元数 100²=10,000；三元数 100³=1,000,000。",
        "长度 5 的续写有 100^5=10^10 种。",
        "完整标签路径有 10^20 条；Viterbi 约做 19×100=1,900 次转移比较，另加初始化、发射和终止成本。"
      ],
      "resultZh": "即使词表大小固定，组合空间仍会迅速增长。",
      "practiceZh": "K=4、T=3 时有多少完整标签路径？",
      "keyZh": "4³=64；稠密递推约需 2×4²=32 次转移比较。",
      "tipEn": "Specify the variable of exponential growth. With fixed n, V^n is polynomial in V."
    },
    {
      "id": "C06",
      "topic": "HMM path probability",
      "q": "Two states N and V have initial probabilities (0.6,0.4), transitions N→N=0.7, N→V=0.3, V→N=0.4, V→V=0.6, and emissions P(fish|N)=0.8, P(fish|V)=0.3, P(swim|N)=0.2, P(swim|V)=0.7. Compute the joint probability of observations “fish swim” and path N,V. No END factor is used.",
      "formula": "P(tags,words) = π(tag1)b_tag1(word1)\n                  × product_(t=2..T) a_(tag[t-1],tag[t]) b_tag[t](word[t])",
      "steps": [
        "Initial state and first emission: 0.6×0.8=0.48.",
        "Transition and second emission: 0.3×0.7=0.21.",
        "Joint path-and-observation probability: 0.48×0.21=0.1008."
      ],
      "result": "P(N,V; fish,swim)=0.1008. This is not P(N,V | fish,swim) unless divided by P(fish,swim).",
      "zh": "HMM 的 joint、posterior、最佳路径分数不可混用。若题目给 END 转移，终止时要乘进去。",
      "source": "W03 pp.57-66",
      "practice": "Using the same model, compute the V,V joint path probability.",
      "key": "0.4×0.3×0.6×0.7=0.0504.",
      "level": "Core practice",
      "topicZh": "HMM 路径概率",
      "qZh": "状态 N、V 初始概率为 (0.6,0.4)；转移 N→N=0.7、N→V=0.3、V→N=0.4、V→V=0.6；发射 P(fish∣N)=0.8、P(fish∣V)=0.3、P(swim∣N)=0.2、P(swim∣V)=0.7。计算观察 fish swim 与路径 N,V 的联合概率，不使用 END 因子。",
      "formulaZh": "路径与观察的联合概率=初始状态概率×首个发射概率×之后各步的转移概率与发射概率。",
      "stepsZh": [
        "初始状态与首个发射：0.6×0.8=0.48。",
        "转移与第二次发射：0.3×0.7=0.21。",
        "联合概率：0.48×0.21=0.1008。"
      ],
      "resultZh": "P(N,V; fish,swim)=0.1008；若不再除以 P(fish,swim)，它不是条件后验 P(N,V∣fish,swim)。",
      "practiceZh": "使用同一模型计算路径 V,V 的联合概率。",
      "keyZh": "0.4×0.3×0.6×0.7=0.0504。",
      "tipEn": "Do not confuse joint probability, posterior probability and best-path score. Include an END transition if the question supplies one."
    },
    {
      "id": "C07",
      "topic": "Viterbi table and backtracking",
      "q": "Decode “fish swim fish”, with no END factor. States N,V have initial probabilities (0.6,0.4), transitions N→N=0.7, N→V=0.3, V→N=0.4, V→V=0.6, and emissions P(fish|N)=0.8, P(fish|V)=0.3, P(swim|N)=0.2, P(swim|V)=0.7 (the same model as C06). Show both state scores and predecessor choices at each position.",
      "formula": "v1(j)=π_j b_j(w1)\nv_t(j)=b_j(w_t) max_i [v_(t-1)(i) a_ij]\nbp_t(j)=argmax_i [v_(t-1)(i) a_ij]",
      "steps": [
        "t=1: N=0.48, V=0.12.",
        "t=2, N: max(0.48×0.7,0.12×0.4)×0.2=0.0672, predecessor N. V: max(0.48×0.3,0.12×0.6)×0.7=0.1008, predecessor N.",
        "t=3, N: max(0.0672×0.7,0.1008×0.4)×0.8=0.037632, predecessor N. V: max(0.0672×0.3,0.1008×0.6)×0.3=0.018144, predecessor V.",
        "Choose final N, then follow N←N←N. Although V had the highest score at t=2, the best complete path is N,N,N."
      ],
      "result": "Best path N,N,N; joint score 0.037632.",
      "zh": "不能逐列独立取最高状态拼起来；必须沿最后胜者的 backpointer 回溯。Forward 算法求总概率用 sum，Viterbi 求最佳路径用 max。",
      "source": "W03 pp.68-83",
      "practice": "If the sequence stops at “fish swim”, what is the best path?",
      "key": "N,V with score 0.1008.",
      "level": "Core practice",
      "topicZh": "Viterbi 表格与回溯",
      "qZh": "解码 fish swim fish，不使用 END 因子。N、V 初始概率 (0.6,0.4)；转移 N→N=0.7、N→V=0.3、V→N=0.4、V→V=0.6；发射 fish∣N=0.8、fish∣V=0.3、swim∣N=0.2、swim∣V=0.7（与 C06 相同）。列出每个位置两个状态的得分和最佳前驱。",
      "formulaZh": "首列=初始概率×发射概率；之后每格取“前驱得分×转移概率”的最大值，再乘当前发射概率；回溯指针保存最大值的前驱。",
      "stepsZh": [
        "t=1：N=0.48，V=0.12。",
        "t=2：N=max(0.48×0.7,0.12×0.4)×0.2=0.0672，前驱 N；V=max(0.48×0.3,0.12×0.6)×0.7=0.1008，前驱 N。",
        "t=3：N=max(0.0672×0.7,0.1008×0.4)×0.8=0.037632，前驱 N；V=max(0.0672×0.3,0.1008×0.6)×0.3=0.018144，前驱 V。",
        "选末列 N，沿 N←N←N 回溯。虽然 t=2 的最高单格是 V，最佳完整路径仍为 N,N,N。"
      ],
      "resultZh": "最佳路径 N,N,N，联合得分 0.037632。",
      "practiceZh": "如果序列在 fish swim 处结束，最佳路径是什么？",
      "keyZh": "N,V，得分 0.1008。",
      "tipEn": "Backtrack from the winning final state; do not concatenate column-wise maxima. Forward sums over paths, whereas Viterbi maximises."
    },
    {
      "id": "C08",
      "topic": "POS and BIO tagging",
      "q": "Assign UPOS tags and BIO entity tags to the tokenisation: “Barack | Obama | visited | New | York | .”. Use entity types PER and LOC.",
      "formula": "BIO labels with K types: {O} union {B-T,I-T for each type T}\nNumber of labels = 2K+1",
      "steps": [
        "UPOS: Barack/PROPN, Obama/PROPN, visited/VERB, New/PROPN, York/PROPN, ./PUNCT.",
        "BIO: Barack/B-PER, Obama/I-PER, visited/O, New/B-LOC, York/I-LOC, ./O.",
        "With two entity types there are 5 possible BIO labels, even though this example need not use every possible label."
      ],
      "result": "Entity spans are “Barack Obama” (PER) and “New York” (LOC).",
      "zh": "POS 标签体系必须注明 UPOS 或 Penn；句号单独分词时也要标 O/PUNCT。",
      "source": "W03 pp.18-21,89-94; E24 Q9",
      "practice": "Tag “Alice met Bob” in BIO with PER entities.",
      "key": "Alice/B-PER met/O Bob/B-PER. Bob is a new entity, not I-PER.",
      "level": "Core practice",
      "topicZh": "词性与 BIO 标注",
      "qZh": "对分词结果 Barack / Obama / visited / New / York / . 标注 UPOS 词性和 BIO 实体标签，实体类型使用 PER 与 LOC。",
      "formulaZh": "K 类实体的 BIO 标签集合包含 O，以及每类的 B-T 和 I-T，共 2K+1 个标签。",
      "stepsZh": [
        "UPOS：Barack/PROPN，Obama/PROPN，visited/VERB，New/PROPN，York/PROPN，./PUNCT。",
        "BIO：Barack/B-PER，Obama/I-PER，visited/O，New/B-LOC，York/I-LOC，./O。",
        "两类实体共有 5 个可能 BIO 标签；一个例子不必把所有标签都用到。"
      ],
      "resultZh": "实体跨度为 Barack Obama（人物）和 New York（地点）。",
      "practiceZh": "对 Alice met Bob 标注 PER 实体的 BIO 标签。",
      "keyZh": "Alice/B-PER met/O Bob/B-PER。Bob 是新实体，不能标为 I-PER。",
      "tipEn": "State whether the POS scheme is UPOS or Penn. A separately tokenised full stop also needs O and PUNCT labels."
    },
    {
      "id": "C09",
      "topic": "CFG membership and a CKY-style chart",
      "q": "Use S→NP VP, NP→Det N, VP→V NP, Det→the, N→cat|dog, V→sees. Parse “the cat sees the dog”, and decide whether “the sees the dog” can be parsed. Lowercase the input.",
      "formula": "CKY: A belongs to chart[i,j] if A→B C and\n      B belongs to chart[i,k], C belongs to chart[k+1,j]\nLexical rules initialise single-token cells.",
      "steps": [
        "For the valid sentence, positions 1 and 4 contain Det, 2 and 5 contain N, and 3 contains V.",
        "NP spans are [1,2] and [4,5]; VP is [3,5]; S is [1,5].",
        "The unique tree is (S (NP (Det the) (N cat)) (VP (V sees) (NP (Det the) (N dog)))).",
        "“the sees the dog” cannot form the initial NP because “sees” is not an N in this grammar; it has zero complete parses."
      ],
      "result": "One parse for “the cat sees the dog”; zero for the malformed sentence.",
      "zh": "旧答案把题目当成含 cat 的另一句，不能照抄“2 棵”。解析时不能自己插入词。",
      "source": "W04 pp.24-34; E24 Q13; older answer key p.4",
      "practice": "Replace “cat” with “dog” in the valid sentence. How many trees under this grammar?",
      "key": "One. Different lexical choices do not create ambiguity for a fixed input string.",
      "level": "Core practice",
      "topicZh": "CFG 句子判定与 CKY 式表格",
      "qZh": "语法为 S→NP VP、NP→Det N、VP→V NP、Det→the、N→cat 或 dog、V→sees。把输入转小写，分析 the cat sees the dog，并判断 the sees the dog 能否分析。",
      "formulaZh": "词法规则初始化单 token 格；如果存在 A→BC 且左子跨度含 B、右子跨度含 C，则把 A 加入整个跨度的格。",
      "stepsZh": [
        "合法句子的第 1、4 位是 Det，第 2、5 位是 N，第 3 位是 V。",
        "NP 跨度为 [1,2] 和 [4,5]；VP 为 [3,5]；S 为 [1,5]。",
        "唯一树为 (S (NP (Det the) (N cat)) (VP (V sees) (NP (Det the) (N dog))))。",
        "the sees the dog 无法组成开头 NP，因为本语法中 sees 不是 N，因此完整分析为 0 棵。"
      ],
      "resultZh": "the cat sees the dog 有 1 棵树；缺词句有 0 棵。",
      "practiceZh": "把合法句中的 cat 换成 dog，在本语法下有几棵树？",
      "keyZh": "1 棵。对固定输入，词法规则的不同可选词不自动造成歧义。",
      "tipEn": "The older key analyses a different sentence containing cat. Do not insert a missing word or copy the claim of two parses."
    },
    {
      "id": "C10",
      "topic": "Earley dotted states",
      "q": "Using S→NP VP, NP→Det N, VP→V NP, give the key prediction, scanning and completion steps for the prefix “the cat”. Lexical rules are Det→the and N→cat. A state is [A→α . β, origin] in the chart at the current input boundary.",
      "formula": "Predict: expect non-terminal B -> add its rules at current boundary\nScan: match next terminal -> advance dot and boundary\nComplete: finished B -> advance states waiting for B at its origin",
      "steps": [
        "At boundary 0, [S→. NP VP,0] predicts [NP→. Det N,0], then [Det→. the,0].",
        "Scanning “the” yields [Det→the .,0] at boundary 1; completing it advances [NP→Det . N,0].",
        "Predict and scan N→cat to reach [N→cat .,1] at boundary 2, then complete [NP→Det N .,0].",
        "Completing the NP advances [S→NP . VP,0] at boundary 2. This is not a complete sentence yet: VP remains unrecognised."
      ],
      "result": "Successful recognition requires a complete start-symbol state spanning the whole input.",
      "zh": "origin 与当前 chart index 不同；dot 左边已识别，右边还未识别。",
      "source": "W04 pp.35-63",
      "practice": "In [VP→V . NP,2], what is still expected?",
      "key": "An NP. The VP began at boundary 2; the state alone does not encode the current boundary unless its chart location is also supplied.",
      "level": "Core practice",
      "topicZh": "Earley 带点状态",
      "qZh": "使用 S→NP VP、NP→Det N、VP→V NP，给出前缀 the cat 的关键预测、扫描和完成步骤；词法规则为 Det→the、N→cat。状态写为 [A→α . β, 起点]，保存在当前输入边界的 chart。",
      "formulaZh": "预测：预期非终结符时加入其规则；扫描：匹配终结符后推进点和边界；完成：识别出成分后推进其起点处等待该成分的状态。",
      "stepsZh": [
        "边界 0：[S→. NP VP,0] 预测 [NP→. Det N,0]，再预测 [Det→. the,0]。",
        "扫描 the 后在边界 1 得到 [Det→the .,0]；完成它可推进到 [NP→Det . N,0]。",
        "预测并扫描 N→cat，在边界 2 得到 [N→cat .,1]，再完成 [NP→Det N .,0]。",
        "完成 NP 后在边界 2 推进为 [S→NP . VP,0]；VP 尚未识别，所以还不是完整句子。"
      ],
      "resultZh": "成功识别需要一个覆盖全部输入的完整起始符号状态。",
      "practiceZh": "[VP→V . NP,2] 还在等待什么？",
      "keyZh": "等待 NP；VP 从边界 2 开始。若未提供它所在的 chart，单凭这个状态不能得知当前边界。",
      "tipEn": "The origin is not the current chart index. The left of the dot is recognised; the right remains to be recognised."
    },
    {
      "id": "C11",
      "topic": "Dependency structure and semantic roles",
      "q": "Draw head→dependent relations for “The scientist read the book”, using a UD-style content-word head convention. Then identify the subject and agent in “The book was read by the scientist”.",
      "formula": "Each non-root token has one syntactic head.\nA tree over n tokens has n-1 token-to-token edges, plus a ROOT link if shown.",
      "steps": [
        "For the active sentence: ROOT→read; read→scientist (nsubj); scientist→The (det); read→book (obj); book→the (det).",
        "The tree has 5 tokens and 4 token-to-token edges. Capitalisation does not change the determiner relation.",
        "In the passive sentence, book is the grammatical subject/patient, while scientist is the agent. Under UD-style analysis, read is the root and was is an auxiliary dependent."
      ],
      "result": "Head structure and semantic roles must be distinguished, particularly under passive voice.",
      "zh": "E25 参考树把 was 放根，和常见 UD 分析不同；考试必须先看给定 conventions，不能把自己的体系默默替换成标准答案。",
      "source": "W04 pp.64-71,86-95; E25 Q11",
      "practice": "For “Cats chase mice”, name the root and two dependencies.",
      "key": "chase is root; chase→Cats (nsubj); chase→mice (obj).",
      "level": "Core practice",
      "topicZh": "依存结构与语义角色",
      "qZh": "按照 UD 式实义词为中心的约定，为 The scientist read the book 画出中心词→依存词关系。再识别 The book was read by the scientist 的主语和施事。",
      "formulaZh": "每个非根 token 有一个句法中心；n 个 token 的树有 n−1 条 token 间边，若画 ROOT 还会多一条根连接。",
      "stepsZh": [
        "主动句：ROOT→read；read→scientist(nsubj)；scientist→The(det)；read→book(obj)；book→the(det)。",
        "共 5 个 token、4 条 token 间边；大小写不改变限定词关系。",
        "被动句中 book 是语法主语/受事，scientist 是施事。UD 式分析通常以 read 为根，把 was 作为助动词依存项。"
      ],
      "resultZh": "句法中心结构与语义角色必须区分，尤其在被动语态中。",
      "practiceZh": "Cats chase mice 的根和两条依存关系是什么？",
      "keyZh": "根为 chase；chase→Cats(nsubj)，chase→mice(obj)。",
      "tipEn": "The E25 reference uses was as its root, unlike common UD analysis. Follow any specified annotation convention and state yours explicitly."
    },
    {
      "id": "C12",
      "topic": "Perceptron update and XOR construction",
      "q": "A perceptron uses y_hat=1 if w·x+b>0, else 0. Initially w=(0,0), b=0. For x=(1,0), gold y=1 and learning rate 1, make one update. Then construct XOR with threshold hidden units.",
      "formula": "w_new = w + η(y-y_hat)x; b_new = b + η(y-y_hat)\nXOR: h1=1[x1+x2>0.5], h2=1[x1+x2>1.5]\noutput=1[h1-2h2>0.5]",
      "steps": [
        "The initial score is 0, so prediction is 0 and error y-y_hat=1.",
        "Update to w=(1,0), b=1.",
        "For XOR inputs 00,01,10,11, hidden pairs (h1,h2) are (0,0),(1,0),(1,0),(1,1), giving outputs 0,1,1,0."
      ],
      "result": "A single linear threshold cannot separate XOR, but nonlinear hidden features can.",
      "zh": "题目必须规定 score=0 时的预测。hidden 层不用 sigmoid 也能说明非线性可分性。",
      "source": "W05 pp.30-50; E25 Q14",
      "practice": "Starting from w=(1,0), b=1, update on x=(0,1), y=0 with η=1.",
      "key": "Prediction=1; w_new=(1,-1), b_new=0.",
      "level": "Core practice",
      "topicZh": "感知机更新与 XOR 构造",
      "qZh": "感知机在 w·x+b>0 时预测 1，否则预测 0。初始 w=(0,0)、b=0；给定 x=(1,0)、真实 y=1、学习率 1，更新一次。再用阈值隐藏单元构造 XOR。",
      "formulaZh": "权重增量=η(y−预测值)x，偏置增量=η(y−预测值)；用两个不同阈值的隐藏单元，再非线性组合来构造 XOR。",
      "stepsZh": [
        "初始得分为 0，预测 0，所以误差 y−预测值=1。",
        "更新后 w=(1,0)、b=1。",
        "输入 00、01、10、11 的隐藏对分别为 (0,0)、(1,0)、(1,0)、(1,1)，最终输出 0、1、1、0。"
      ],
      "resultZh": "单一线性阈值不能分离 XOR，但非线性隐藏特征可以。",
      "practiceZh": "从 w=(1,0)、b=1 出发，用 x=(0,1)、y=0、η=1 更新。",
      "keyZh": "预测为 1，更新后 w=(1,−1)、b=0。",
      "tipEn": "Define the tie rule for score zero. Threshold hidden units already demonstrate nonlinear separability; sigmoid is not required."
    },
    {
      "id": "C13",
      "topic": "Softmax, cross-entropy and output gradients",
      "q": "A two-class model has logits z=(ln 3,0) and the gold class is the second. Compute probabilities, natural-log cross-entropy and the gradient with respect to logits.",
      "formula": "p_i = exp(z_i)/sum_j exp(z_j)\nL=-ln(p_gold); dL/dz_i=p_i-y_i",
      "steps": [
        "Exponentials are (3,1), so probabilities are (0.75,0.25).",
        "L=-ln(0.25)=ln4≈1.386294.",
        "With one-hot y=(0,1), the gradient is (0.75,-0.75)."
      ],
      "result": "p=(0.75,0.25); L≈1.3863; gradient=(0.75,-0.75).",
      "zh": "p-y 适用于 softmax 配自然对数 CE。若损失用 log10，梯度还要乘 1/ln10。",
      "source": "W05 pp.125-158; E24 Q14",
      "practice": "If the gold class is instead the first, what are loss and gradient?",
      "key": "L=-ln0.75≈0.287682; gradient=(-0.25,0.25).",
      "level": "Core practice",
      "topicZh": "Softmax、交叉熵与输出梯度",
      "qZh": "二分类 logits 为 (ln3,0)，真实类别是第二类。计算概率、自然对数交叉熵和对 logits 的梯度。",
      "formulaZh": "Softmax 将指数归一化；损失为 −ln(真实类别概率)；自然对数 softmax 交叉熵的 logit 梯度为 p−y。",
      "stepsZh": [
        "指数为 (3,1)，所以概率为 (0.75,0.25)。",
        "L=−ln0.25=ln4≈1.386294。",
        "One-hot 标签为 (0,1)，梯度为 (0.75,−0.75)。"
      ],
      "resultZh": "p=(0.75,0.25)，L≈1.3863，梯度=(0.75,−0.75)。",
      "practiceZh": "若真实类别改为第一类，损失与梯度是多少？",
      "keyZh": "L=−ln0.75≈0.287682；梯度=(−0.25,0.25)。",
      "tipEn": "The p−y formula assumes natural-log cross-entropy. A base-10 loss introduces a factor of 1/ln10."
    },
    {
      "id": "C14",
      "topic": "Backpropagation through a shared graph",
      "q": "Compute f and its gradient at (x,y,z)=(2,-1,0) for f=z+sin(x²+y exp(z)). Use radians, sin3≈0.141120 and cos3≈-0.989992.",
      "formula": "a=x²; b=exp(z); c=yb; d=a+c; f=z+sin(d)\ndf/dx=cos(d)·2x\ndf/dy=cos(d)·exp(z)\ndf/dz=1 + cos(d)·y exp(z)",
      "steps": [
        "Forward: a=4, b=1, c=-1, d=3, f=sin3≈0.141120.",
        "Backward through sin: df/dd=cos3≈-0.989992.",
        "df/dx=4cos3≈-3.959970; df/dy=cos3≈-0.989992.",
        "z affects f directly and through exp(z), so df/dz=1-cos3≈1.989992."
      ],
      "result": "Gradient ≈ (-3.959970, -0.989992, 1.989992).",
      "zh": "z 的两条路径必须相加；漏掉直接的 +z 会少一个 1。这是 W05 原例的逐步推导。",
      "source": "W05 pp.80-93, especially p.89",
      "practice": "For g=x²+x and x=2, accumulate both derivative paths.",
      "key": "dg/dx=2x+1=5.",
      "level": "Core practice",
      "topicZh": "共享计算图上的反向传播",
      "qZh": "在 (x,y,z)=(2,−1,0) 处计算 f=z+sin(x²+y exp(z)) 及梯度。使用弧度制，sin3≈0.141120、cos3≈−0.989992。",
      "formulaZh": "把计算拆成 a=x²、b=exp(z)、c=yb、d=a+c、f=z+sin(d)，再沿每条路径使用链式法则；z 的两条贡献相加。",
      "stepsZh": [
        "前向：a=4、b=1、c=−1、d=3，f=sin3≈0.141120。",
        "经过 sin 反传：∂f/∂d=cos3≈−0.989992。",
        "∂f/∂x=4cos3≈−3.959970；∂f/∂y=cos3≈−0.989992。",
        "z 既直接影响 f，也通过 exp(z) 影响，因此 ∂f/∂z=1−cos3≈1.989992。"
      ],
      "resultZh": "梯度约为 (−3.959970,−0.989992,1.989992)。",
      "practiceZh": "g=x²+x，x=2，累加两条导数路径。",
      "keyZh": "dg/dx=2x+1=5。",
      "tipEn": "Both z paths must contribute; omitting the direct +z loses a derivative of 1. This works through the W05 example."
    },
    {
      "id": "C15",
      "topic": "A scalar neural update",
      "q": "A sigmoid unit has p=σ(wx+b), x=2, w=0, b=0, y=1. Use L=0.5(p-y)² and η=0.1. Compute gradients and one gradient-descent update.",
      "formula": "σ(z)=1/(1+exp(-z)); σ'(z)=σ(z)(1-σ(z))\ndL/dw=(p-y)p(1-p)x; dL/db=(p-y)p(1-p)\nθ_new=θ-η·gradient",
      "steps": [
        "z=0, p=0.5, L=0.125.",
        "Local pre-activation gradient is (0.5-1)×0.5×0.5=-0.125.",
        "dL/dw=-0.25 and dL/db=-0.125.",
        "w_new=0-0.1(-0.25)=0.025; b_new=0.0125."
      ],
      "result": "Updated w=0.025 and b=0.0125.",
      "zh": "先确认 loss 是否含 1/2；用 CE 时公式不同。梯度下降是减梯度，所以负梯度使参数增加。",
      "source": "W05 pp.118-124",
      "practice": "For L=(w-3)² at w=1 and η=0.1, compute one update.",
      "key": "Gradient=-4; w_new=1.4.",
      "level": "Core practice",
      "topicZh": "标量神经单元更新",
      "qZh": "Sigmoid 单元 p=σ(wx+b)，x=2、w=0、b=0、y=1；损失 L=0.5(p−y)²、学习率 η=0.1。求梯度并更新一次。",
      "formulaZh": "Sigmoid 导数为 p(1−p)；对预激活的梯度为 (p−y)p(1−p)，权重再乘 x；梯度下降使用 θ新=θ−η∇θ。",
      "stepsZh": [
        "z=0、p=0.5、L=0.125。",
        "预激活的局部梯度为 (0.5−1)×0.5×0.5=−0.125。",
        "∂L/∂w=−0.25，∂L/∂b=−0.125。",
        "w新=0−0.1(−0.25)=0.025；b新=0.0125。"
      ],
      "resultZh": "更新后 w=0.025，b=0.0125。",
      "practiceZh": "L=(w−3)²，w=1、η=0.1，更新一次。",
      "keyZh": "梯度=−4，w新=1.4。",
      "tipEn": "Check whether the loss includes 1/2. Cross-entropy gives a different derivative. Subtracting a negative gradient increases the parameter."
    },
    {
      "id": "C16",
      "topic": "Regularisation, dropout and dense-layer parameters",
      "q": "A loss includes λ||w||² with λ=0.1 and w=(2,-1). Compute its penalty and gradient contribution. For inverted dropout with keep probability 0.8, give the retained value of activation 10. Count parameters in a 3→4→2 fully connected network including biases.",
      "formula": "L2 penalty=λ sum_i w_i²; gradient=2λw\nInverted dropout: a_out=m a / q, m~Bernoulli(q)\nDense layer parameters=n_in n_out+n_out",
      "steps": [
        "Penalty=0.1(4+1)=0.5; added gradient=(0.4,-0.2).",
        "A retained activation becomes 10/0.8=12.5; a dropped activation is 0. Its expected value is still 10.",
        "First layer: 3×4+4=16. Second: 4×2+2=10. Total=26."
      ],
      "result": "Penalty 0.5; gradient contribution (0.4,-0.2); retained activation 12.5; 26 parameters.",
      "zh": "若正则项定义为 λ||w||²/2，梯度是 λw。bias 是否正则化及是否计数必须注明。",
      "source": "W05 pp.101-105,125-138",
      "practice": "How many parameters does a 5→3 affine layer have with biases?",
      "key": "5×3+3=18.",
      "level": "Core practice",
      "topicZh": "正则化、dropout 与全连接参数量",
      "qZh": "损失含 λ||w||²，λ=0.1、w=(2,−1)，求惩罚和梯度贡献。倒置 dropout 保留率 0.8 时，激活 10 被保留后的值是多少？计算 3→4→2 全连接网络含偏置的参数量。",
      "formulaZh": "L2 梯度为 2λw；倒置 dropout 将保留激活除以保留概率；仿射层参数量=输入数×输出数+输出偏置数。",
      "stepsZh": [
        "惩罚=0.1(4+1)=0.5；增加梯度=(0.4,−0.2)。",
        "保留激活变为 10/0.8=12.5，丢弃为 0，期望仍为 10。",
        "第一层 3×4+4=16；第二层 4×2+2=10；共 26。"
      ],
      "resultZh": "惩罚 0.5；梯度贡献 (0.4,−0.2)；保留值 12.5；参数 26 个。",
      "practiceZh": "含偏置的 5→3 仿射层有多少参数？",
      "keyZh": "5×3+3=18。",
      "tipEn": "With a λ||w||²/2 convention the gradient is λw. State whether biases are penalised and counted."
    },
    {
      "id": "C17",
      "topic": "CNN parameter counting: an underspecified sample",
      "q": "A sequential CNN has four ordinary 3×3 convolution layers, each outputting 128 channels. Assume the first input has 3 channels, groups=1, and one bias per output channel. Count trainable convolution parameters.",
      "formula": "Per layer: C_out × (kernel_height × kernel_width × C_in + 1)",
      "steps": [
        "Layer 1: 128(3×3×3+1)=3,584.",
        "Each of layers 2-4 receives 128 input channels: 128(3×3×128+1)=147,584.",
        "Total: 3,584+3×147,584=446,336. Spatial input size changes operations, not these shared parameter counts."
      ],
      "result": "446,336 parameters under the stated sequential RGB assumptions.",
      "zh": "旧题未给输入通道；旧 key 的 14,336 把每层都当作接收 3 通道，不适用于普通串联四层。应写假设和通式。",
      "source": "E24 Q30; older answer key p.7; supplementary bridge",
      "practice": "Count one 3×3 convolution with 16 input channels, 32 output channels and biases.",
      "key": "32(9×16+1)=4,640.",
      "level": "Core practice",
      "topicZh": "CNN 参数计数：条件不足的样题",
      "qZh": "一个串联 CNN 有四层普通 3×3 卷积，每层输出 128 通道。假设首层输入 3 通道、groups=1，每个输出通道有一个偏置，计算可训练卷积参数量。",
      "formulaZh": "每层参数量=输出通道数×(核高×核宽×输入通道数+1 个偏置)。",
      "stepsZh": [
        "首层：128(3×3×3+1)=3,584。",
        "第 2–4 层各接收 128 输入通道，每层 128(3×3×128+1)=147,584。",
        "总量=3,584+3×147,584=446,336。空间输入大小改变运算量，不改变这些共享参数数量。"
      ],
      "resultZh": "在普通串联、RGB 输入及含偏置假设下，共 446,336 个参数。",
      "practiceZh": "一层 3×3 卷积，16 输入通道、32 输出通道，含偏置，有多少参数？",
      "keyZh": "32(9×16+1)=4,640。",
      "tipEn": "The old question omits input channels. Its 14,336 answer assumes three input channels at every layer, not an ordinary sequential stack. State assumptions and the general formula."
    },
    {
      "id": "C18",
      "topic": "Dot product and cosine similarity",
      "q": "For v=(3,4) and w=(1,2), calculate the dot product and cosine similarity. Does multiplying v by 10 change both measures?",
      "formula": "v·w=sum_i v_i w_i\ncos(v,w)=(v·w)/(||v|| ||w||)",
      "steps": [
        "Dot product=3×1+4×2=11.",
        "Norms: ||v||=5 and ||w||=sqrt5.",
        "Cosine=11/(5sqrt5)≈0.983870. Scaling v by 10 changes the dot product to 110 but leaves cosine unchanged."
      ],
      "result": "Dot product 11; cosine ≈0.983870.",
      "zh": "零向量没有定义良好的 cosine；符号向量的 cosine 可为负。",
      "source": "W06 pp.40-46; E24 Q20",
      "practice": "What are dot product and cosine for (1,0) and (-1,0)?",
      "key": "Both are -1.",
      "level": "Core practice",
      "topicZh": "点积与余弦相似度",
      "qZh": "v=(3,4)、w=(1,2)，求点积和余弦相似度。把 v 乘 10 会改变哪一个指标？",
      "formulaZh": "点积为对应坐标乘积之和；余弦=点积/(两个向量的范数乘积)。",
      "stepsZh": [
        "点积=3×1+4×2=11。",
        "范数 ||v||=5、||w||=√5。",
        "余弦=11/(5√5)≈0.983870。v 乘 10 后点积变为 110，但余弦不变。"
      ],
      "resultZh": "点积 11；余弦约 0.983870。",
      "practiceZh": "(1,0) 与 (−1,0) 的点积和余弦是多少？",
      "keyZh": "二者都是 −1。",
      "tipEn": "Cosine is undefined for a zero vector and can be negative for signed vectors."
    },
    {
      "id": "C19",
      "topic": "Analogy arithmetic and direction",
      "q": "Given king=(0.5,0.8,0.3), man=(0.2,0.6,0.1), queen=(0.4,0.9,0.4), woman=(0.1,0.7,0.2), solve “king is to man as queen is to ?”.",
      "formula": "a:b :: c:d -> target vector ≈ v_b - v_a + v_c",
      "steps": [
        "The direction is king→man, so use man-king+queen.",
        "Coordinate calculation: (0.2-0.5+0.4, 0.6-0.8+0.9, 0.1-0.3+0.4)=(0.1,0.7,0.2).",
        "This exactly equals the given woman vector. The solution key’s king-man+woman instead answers “man:king::woman:?”."
      ],
      "result": "Answer: woman. The key’s queen result corresponds to a different analogy direction.",
      "zh": "先把 a:b::c:? 写清楚，再用 b-a+c；不要记成任何题都 king-man+woman。",
      "source": "W06 pp.85-88; E25 Q17 and solution p.6",
      "practice": "Solve man:king::woman:? using the same vectors.",
      "key": "king-man+woman=(0.4,0.9,0.4), so queen.",
      "level": "Core practice",
      "topicZh": "类比运算与方向",
      "qZh": "给定 king=(0.5,0.8,0.3)、man=(0.2,0.6,0.1)、queen=(0.4,0.9,0.4)、woman=(0.1,0.7,0.2)，求 king 对应 man，如同 queen 对应什么。",
      "formulaZh": "a:b::c:d 的目标向量近似为 v_b−v_a+v_c，先确定关系方向。",
      "stepsZh": [
        "方向为 king→man，所以计算 man−king+queen。",
        "逐坐标：(0.2−0.5+0.4,0.6−0.8+0.9,0.1−0.3+0.4)=(0.1,0.7,0.2)。",
        "恰好等于 woman。参考解中的 king−man+woman 实际回答的是 man:king::woman:?。"
      ],
      "resultZh": "答案为 woman；参考解得到 queen，是因为它计算了不同方向的类比。",
      "practiceZh": "使用同一组向量求 man:king::woman:?。",
      "keyZh": "king−man+woman=(0.4,0.9,0.4)，即 queen。",
      "tipEn": "Write a:b::c:? before using b−a+c; do not memorise king−man+woman for every analogy."
    },
    {
      "id": "C20",
      "topic": "PMI and PPMI",
      "q": "A co-occurrence table has 100 total word-context events. Word w has marginal count 20, context c has marginal count 10, and their joint count is 5. Compute PMI in bits; then replace the joint count by 1 while keeping the marginals.",
      "formula": "PMI(w,c)=log2[P(w,c)/(P(w)P(c))]\nPPMI(w,c)=max(PMI(w,c),0)",
      "steps": [
        "P(w)=0.2, P(c)=0.1, P(w,c)=0.05.",
        "PMI=log2(0.05/0.02)=log2(2.5)≈1.321928; PPMI is the same.",
        "With joint probability 0.01, PMI=log2(0.5)=-1 and PPMI=0."
      ],
      "result": "Observed co-occurrence exceeds independence in the first case and falls below it in the second.",
      "zh": "分母的 marginal counts 必须来自同一 co-occurrence 事件空间；不要拿不一致的词频总数来混算。",
      "source": "W06 pp.35-46",
      "practice": "If P(w,c)=P(w)P(c), what is PMI?",
      "key": "0.",
      "level": "Core practice",
      "topicZh": "PMI 与 PPMI",
      "qZh": "共现表共有 100 个词—上下文事件，w 的边际计数 20、c 的边际计数 10、联合计数 5。求以 bit 计的 PMI；再保持边际不变，将联合计数改为 1。",
      "formulaZh": "PMI=log2(联合概率/(两个边际概率之积))；PPMI=max(PMI,0)。",
      "stepsZh": [
        "P(w)=0.2、P(c)=0.1、P(w,c)=0.05。",
        "PMI=log2(0.05/0.02)=log2(2.5)≈1.321928；PPMI 相同。",
        "联合概率改为 0.01 后，PMI=log2(0.5)=−1，PPMI=0。"
      ],
      "resultZh": "第一种共现高于独立假设预期，第二种低于预期。",
      "practiceZh": "若 P(w,c)=P(w)P(c)，PMI 为多少？",
      "keyZh": "0。",
      "tipEn": "Use marginals from the same co-occurrence event space; do not mix incompatible token totals."
    },
    {
      "id": "C21",
      "topic": "Embedding training objectives",
      "q": "Two context vectors are (1,0) and (0,1). Compute their average for CBOW. For SGNS, suppose a positive pair has dot score ln3 and one negative pair has dot score 0; compute the natural-log loss. For a simplified GloVe pair, let log count lnX=2, prediction 1.5 and weight 1.",
      "formula": "h_CBOW=(1/m) sum_context e_c\nL_SGNS=-ln σ(s_pos)-sum_neg ln σ(-s_neg)\nGloVe pair loss=f(X)(w·c+b_w+b_c-lnX)²",
      "steps": [
        "CBOW context average=(0.5,0.5); an output projection and softmax are still needed to predict a word.",
        "σ(ln3)=0.75 and σ(0)=0.5, so SGNS loss=-ln0.75-ln0.5≈0.980829.",
        "The simplified GloVe contribution is (1.5-2)²=0.25."
      ],
      "result": "CBOW average (0.5,0.5); SGNS loss ≈0.980829; GloVe pair contribution 0.25.",
      "zh": "负样本的目标是 0，所以用 σ(-s_neg)；不能把所有 pair 都当正例。此题是公式练习，不声称样卷必考。",
      "source": "W06 pp.56-75",
      "practice": "If both positive and negative dot scores are 0, what is the one-positive/one-negative SGNS loss?",
      "key": "2ln2≈1.386294.",
      "level": "Core practice",
      "topicZh": "词嵌入训练目标",
      "qZh": "上下文向量为 (1,0)、(0,1)，求 CBOW 平均向量。SGNS 的正例点积为 ln3，单个负例点积为 0，求自然对数损失。简化 GloVe 中 lnX=2、预测=1.5、权重=1，求该词对贡献。",
      "formulaZh": "CBOW 平均上下文嵌入；SGNS 为 −lnσ(正例得分)−Σlnσ(−负例得分)；GloVe 使用加权平方的对数计数预测误差。",
      "stepsZh": [
        "CBOW 平均=(0.5,0.5)，仍需输出投影和 softmax 才能预测词。",
        "σ(ln3)=0.75、σ(0)=0.5，因此 SGNS 损失=−ln0.75−ln0.5≈0.980829。",
        "GloVe 贡献=(1.5−2)²=0.25。"
      ],
      "resultZh": "CBOW=(0.5,0.5)；SGNS≈0.980829；GloVe=0.25。",
      "practiceZh": "正例和负例的点积都为 0 时，一正一负的 SGNS 损失是多少？",
      "keyZh": "2ln2≈1.386294。",
      "tipEn": "A negative pair has target zero, hence σ(−s_neg). This is formula practice, not a prediction of an exam question."
    },
    {
      "id": "C22",
      "topic": "Inverted indexes and Boolean retrieval",
      "q": "Three tokenised documents are D1: “brutus caesar”, D2: “caesar calpurnia”, D3: “brutus”. Build postings lists and answer “brutus AND caesar” and “brutus OR calpurnia”.",
      "formula": "AND = intersection of postings\nOR = union of postings\nNOT requires a defined document universe.",
      "steps": [
        "brutus→[D1,D3]; caesar→[D1,D2]; calpurnia→[D2].",
        "AND: [D1,D3] ∩ [D1,D2] = [D1].",
        "OR: [D1,D3] ∪ [D2] = [D1,D2,D3]."
      ],
      "result": "Postings can additionally store TF or positions; presence-only lists are sufficient here.",
      "zh": "这是 E25 的 term-document incidence 表对应操作。不要把每个 term 的 df 当成具体 doc ID。",
      "source": "W07 pp.16-20; E25 Q19",
      "practice": "Which document matches caesar AND NOT brutus in universe {D1,D2,D3}?",
      "key": "D2.",
      "level": "Core practice",
      "topicZh": "倒排索引与布尔检索",
      "qZh": "三篇已分词文档为 D1: brutus caesar，D2: caesar calpurnia，D3: brutus。构建倒排列表，回答 brutus AND caesar 和 brutus OR calpurnia。",
      "formulaZh": "AND 取倒排列表交集；OR 取并集；NOT 必须先定义完整文档全集。",
      "stepsZh": [
        "brutus→[D1,D3]；caesar→[D1,D2]；calpurnia→[D2]。",
        "AND：[D1,D3]∩[D1,D2]=[D1]。",
        "OR：[D1,D3]∪[D2]=[D1,D2,D3]。"
      ],
      "resultZh": "倒排列表还可存词频或位置；本题只需要是否出现的信息。",
      "practiceZh": "全集为 {D1,D2,D3}，哪篇满足 caesar AND NOT brutus？",
      "keyZh": "D2。",
      "tipEn": "This is the postings equivalent of the sample term-document incidence table. Document frequency is not a list of document IDs."
    },
    {
      "id": "C23",
      "topic": "TF, IDF and TF-IDF conventions",
      "q": "A term occurs 50 times in a 1,000-token document. The collection has N=1,000 documents; df values for car, auto, insurance and best are 100,50,20,10. Give raw and length-normalised TF and unsmoothed log10 IDFs.",
      "formula": "TF_raw=C(t,d); TF_normalised=C(t,d)/|d|\nIDF(t)=log10(N/df_t)",
      "steps": [
        "Raw TF=50; normalised TF=50/1000=0.05.",
        "IDFs are log10(10)=1.0; log10(20)≈1.3010; log10(50)≈1.6990; log10(100)=2.0.",
        "For df=100, raw-TF IDF weight is 50×1=50, while normalised-TF IDF weight is 0.05×1=0.05."
      ],
      "result": "Rounded IDFs: car 1.0, auto 1.3, insurance 1.7, best 2.0.",
      "zh": "E25 key 在 insurance 的计算中误用 df=200，得到 0.7；题表是 20，应得 1.7。",
      "source": "W07 pp.35-42; E25 Q18; E24 Q24-25",
      "practice": "N=10,000 and df=100. What is unsmoothed log10 IDF?",
      "key": "2.",
      "level": "Core practice",
      "topicZh": "TF、IDF 与 TF-IDF 的定义约定",
      "qZh": "一个词在 1,000-token 文档中出现 50 次。集合有 N=1,000 篇文档，car、auto、insurance、best 的 df 分别为 100、50、20、10。求原始/长度归一化 TF，以及未平滑的 log10 IDF。",
      "formulaZh": "原始 TF=词计数；归一化 TF=词计数/文档长度；IDF=log10(N/df)。",
      "stepsZh": [
        "原始 TF=50；归一化 TF=50/1000=0.05。",
        "IDF 分别为 log10(10)=1.0、log10(20)≈1.3010、log10(50)≈1.6990、log10(100)=2.0。",
        "对 df=100，原始 TF-IDF=50×1=50；归一化 TF-IDF=0.05×1=0.05。"
      ],
      "resultZh": "保留一位小数：car=1.0、auto=1.3、insurance=1.7、best=2.0。",
      "practiceZh": "N=10,000、df=100，未平滑 log10 IDF 是多少？",
      "keyZh": "2。",
      "tipEn": "The E25 solution substitutes df=200 for insurance and obtains 0.7, but the question gives 20, so the rounded IDF is 1.7."
    },
    {
      "id": "C24",
      "topic": "BM25 calculation",
      "q": "Use one query term appearing once. Set N=100, df=10, f=3, document length=100, average length=100, k1=1.2 and b=0.75. Use the course IDF log10((N-df+0.5)/(df+0.5)); query-frequency factor is 1.",
      "formula": "score = IDF × [(k1+1)f / (f+k1(1-b+b|d|/avgdl))]",
      "steps": [
        "IDF=log10(90.5/10.5)≈0.935459.",
        "Length ratio=1, so the denominator is 3+1.2=4.2 and numerator is 2.2×3=6.6.",
        "TF factor=6.6/4.2=1.571429; score≈1.470007.",
        "If length doubles with the same f, the denominator becomes 3+1.2(0.25+1.5)=5.1, lowering the score."
      ],
      "result": "BM25 score ≈1.470007 under the specified variant.",
      "zh": "BM25 有不同 IDF 版本，不可偷偷用 log(1+ratio)。此 IDF 对极常见词可能为负；考试照给定公式。",
      "source": "W07 p.39; sample ranking appendix",
      "practice": "What does b=0 remove?",
      "key": "Document-length normalisation; the denominator becomes f+k1.",
      "level": "Core practice",
      "topicZh": "BM25 计算",
      "qZh": "查询词只出现一次。N=100、df=10、文档内词频 f=3、文档长度=平均长度=100、k1=1.2、b=0.75。使用课程 IDF=log10((N−df+0.5)/(df+0.5))，查询词频因子为 1，计算 BM25。",
      "formulaZh": "BM25=IDF×[(k1+1)f/(f+k1(1−b+b×文档长度/平均长度))]。",
      "stepsZh": [
        "IDF=log10(90.5/10.5)≈0.935459。",
        "长度比为 1，所以分母=3+1.2=4.2，分子=2.2×3=6.6。",
        "词频因子=6.6/4.2=1.571429，得分≈1.470007。",
        "词频不变而长度翻倍时，分母=3+1.2(0.25+1.5)=5.1，得分下降。"
      ],
      "resultZh": "在题设变体下，BM25≈1.470007。",
      "practiceZh": "b=0 会去掉什么影响？",
      "keyZh": "去掉文档长度归一化，分母变为 f+k1。",
      "tipEn": "Do not silently change the IDF to log(1+ratio). This variant can be negative for very common terms; use the supplied formula."
    },
    {
      "id": "C25",
      "topic": "Dirichlet query likelihood",
      "q": "A document has length 100 and contains term a twice, term b zero times. Collection probabilities are P(a|C)=0.01 and P(b|C)=0.02. Use μ=100 and query “a b”.",
      "formula": "P(t|d,μ) = [C(t,d)+μP(t|C)]/(|d|+μ)\nP(q|d)=product_t P(t|d,μ)^(C(t,q))",
      "steps": [
        "P(a|d)=(2+100×0.01)/200=3/200=0.015.",
        "P(b|d)=(0+100×0.02)/200=0.01.",
        "P(q|d)=0.015×0.01=0.00015; log10 score≈-3.823909.",
        "The course’s rank-equivalent formula drops a query-only collection-probability constant. Its absolute numeric score differs while document ordering is unchanged for a fixed query."
      ],
      "result": "Query likelihood 0.00015; both terms have non-zero probability after smoothing.",
      "zh": "collection probability 用 collection term frequency/collection token count，不是 df/N。μ 越大越接近背景模型。",
      "source": "W07 p.42; sample ranking appendix",
      "practice": "If term a occurs zero times as well, what is P(a|d) here?",
      "key": "100×0.01/200=0.005.",
      "level": "Core practice",
      "topicZh": "Dirichlet 查询似然",
      "qZh": "文档长度 100，词 a 出现 2 次、b 出现 0 次。集合概率 P(a∣C)=0.01、P(b∣C)=0.02，μ=100，查询为 a b。计算查询似然。",
      "formulaZh": "平滑词概率=(文档词频+μ×集合词概率)/(文档长度+μ)；查询似然按查询中各词的次数累乘相应概率。",
      "stepsZh": [
        "P(a∣d)=(2+100×0.01)/200=3/200=0.015。",
        "P(b∣d)=(0+100×0.02)/200=0.01。",
        "P(q∣d)=0.015×0.01=0.00015；log10 得分≈−3.823909。",
        "课程中的排名等价公式省略了只与查询有关的集合概率常数，所以绝对数值不同，但对固定查询的文档排序相同。"
      ],
      "resultZh": "查询似然为 0.00015；平滑后两个词的概率都非零。",
      "practiceZh": "如果 a 也没有出现，本题中 P(a∣d) 是多少？",
      "keyZh": "100×0.01/200=0.005。",
      "tipEn": "Collection word probability uses collection term frequency divided by total tokens, not df/N. Larger μ moves the estimate toward the background model."
    },
    {
      "id": "C26",
      "topic": "RRF, MaxSim and learned sparse pooling",
      "q": "A document is ranked 1 and 3 by two systems. Compute RRF with c=60. For ColBERT, token-similarity rows are [0.8,0.1,0.4] and [0.2,0.7,0.6]. For one SPLADE vocabulary coordinate, token logits are [-1,0,3].",
      "formula": "RRF(d)=sum_systems 1/(c+rank_system(d))\nMaxSim=sum_query_tokens max_document_tokens similarity\nSPLADE_j=max_i log(1+ReLU(logit_ij))",
      "steps": [
        "RRF=1/61+1/63≈0.032266.",
        "MaxSim=0.8+0.7=1.5.",
        "After ReLU the sparse coordinate candidates are 0,0,3; log1p and max give ln4≈1.386294."
      ],
      "result": "RRF≈0.032266; MaxSim=1.5; SPLADE coordinate≈1.386294.",
      "zh": "这是三种不同用途：列表融合、token 交互评分、词表维度加权。MaxSim 不要求一一匹配。",
      "source": "W07 pp.69,75-77,92",
      "practice": "If a document appears only at rank 2 in one of two lists, using missing contribution 0, what is RRF?",
      "key": "1/62≈0.016129.",
      "level": "Core practice",
      "topicZh": "RRF、MaxSim 与稀疏池化",
      "qZh": "某文档在两个系统中排名第 1 和第 3，求 c=60 的 RRF。ColBERT 的 token 相似度两行为 [0.8,0.1,0.4] 和 [0.2,0.7,0.6]，求 MaxSim。某 SPLADE 词表维度的 token logits 为 [−1,0,3]，求池化权重。",
      "formulaZh": "RRF 对各系统的 1/(c+rank) 求和；MaxSim 对每个查询 token 先取文档 token 相似度最大值，再求和；SPLADE 对 ReLU 后的 log(1+x) 取跨 token 最大值。",
      "stepsZh": [
        "RRF=1/61+1/63≈0.032266。",
        "MaxSim=0.8+0.7=1.5。",
        "ReLU 后为 0、0、3；再取 log1p 与最大值，得到 ln4≈1.386294。"
      ],
      "resultZh": "RRF≈0.032266；MaxSim=1.5；SPLADE 该维权重≈1.386294。",
      "practiceZh": "文档只在两个列表中的一个出现，排名第 2，缺席贡献为 0，RRF 是多少？",
      "keyZh": "1/62≈0.016129。",
      "tipEn": "These serve different purposes: list fusion, token-interaction scoring and vocabulary weighting. MaxSim does not require one-to-one token matching."
    },
    {
      "id": "C27",
      "topic": "Confusion matrix, precision, recall and F1",
      "q": "Of 10 retrieved documents, 6 are relevant. There are 15 relevant documents in a collection of 100. Compute TP, FP, FN, TN, precision, recall, F1 and accuracy.",
      "formula": "P=TP/(TP+FP); R=TP/(TP+FN)\nF1=2PR/(P+R)=2TP/(2TP+FP+FN)\nAccuracy=(TP+TN)/N",
      "steps": [
        "TP=6, FP=4, FN=15-6=9, TN=100-6-4-9=81.",
        "P=6/10=0.6; R=6/15=0.4.",
        "F1=12/(12+4+9)=12/25=0.48; accuracy=(6+81)/100=0.87.",
        "Returning no documents would have 85% accuracy but zero recall, demonstrating why accuracy is misleading here."
      ],
      "result": "P=0.6; R=0.4; F1=0.48; accuracy=0.87.",
      "zh": "正确 F1 分子是 2PR，不是 2P²。检索还需 rank-sensitive 指标，因为此题完全没用排名。",
      "source": "W08 pp.39-45",
      "practice": "With TP=2, FP=2 and FN=0, what is F1?",
      "key": "P=0.5, R=1, F1=2/3.",
      "level": "Core practice",
      "topicZh": "混淆矩阵、精确率、召回率与 F1",
      "qZh": "返回 10 篇文档，其中 6 篇相关。全集有 100 篇文档，共 15 篇相关。计算 TP、FP、FN、TN、精确率、召回率、F1 和准确率。",
      "formulaZh": "P=TP/(TP+FP)；R=TP/(TP+FN)；F1=2PR/(P+R)=2TP/(2TP+FP+FN)；准确率=(TP+TN)/N。",
      "stepsZh": [
        "TP=6、FP=4、FN=15−6=9、TN=100−6−4−9=81。",
        "P=6/10=0.6；R=6/15=0.4。",
        "F1=12/(12+4+9)=0.48；准确率=(6+81)/100=0.87。",
        "不返回任何文档也能得到 85% 准确率，但召回率为零，说明准确率在这里会误导。"
      ],
      "resultZh": "P=0.6，R=0.4，F1=0.48，准确率=0.87。",
      "practiceZh": "TP=2、FP=2、FN=0 时 F1 是多少？",
      "keyZh": "P=0.5、R=1，F1=2/3。",
      "tipEn": "F1 uses 2PR, not 2P². These set-based calculations ignore ranking, so retrieval also needs rank-sensitive measures."
    },
    {
      "id": "C28",
      "topic": "AP, MAP and cutoff conventions",
      "q": "Query A has 4 relevant documents at ranks 2,4,6,8 in a top-10 list. Query B has 2 relevant documents at ranks 1 and 4. Compute full AP for both and MAP. For A, also compute AP@5 with denominator equal to all 4 known relevant documents.",
      "formula": "AP=(1/R_total) sum_k rel(k)·P@k\nMAP=(1/Q) sum_q AP(q)",
      "steps": [
        "For A, precisions at relevant ranks are 1/2,2/4,3/6,4/8, all 0.5. AP_A=(0.5+0.5+0.5+0.5)/4=0.5.",
        "For B, AP_B=(1/1+2/4)/2=0.75.",
        "MAP=(0.5+0.75)/2=0.625.",
        "AP_A@5=(0.5+0.5)/4=0.25. Unretrieved relevant items are not removed from the stated denominator."
      ],
      "result": "AP_A=0.5; AP_B=0.75; MAP=0.625; AP_A@5=0.25.",
      "zh": "某些实现用 min(R,k) 或别的定义，考试先看约定；不要把 MAP 算成所有相关文档位置统一平均。",
      "source": "W08 p.42; E25 Q20",
      "practice": "A query has R=3 and relevant results only at ranks 1 and 3. Compute AP with all known relevant documents in the denominator.",
      "key": "(1+2/3)/3=5/9≈0.555556.",
      "level": "Core practice",
      "topicZh": "AP、MAP 与截断约定",
      "qZh": "查询 A 有 4 篇相关文档，位于 top-10 的第 2、4、6、8 位；查询 B 有 2 篇相关文档，位于第 1、4 位。求各自完整 AP 和 MAP；再求 A 的 AP@5，分母仍为全部 4 篇已知相关文档。",
      "formulaZh": "AP=相关排名处的 P@k 之和/已知相关文档总数；MAP=各查询 AP 的算术平均。",
      "stepsZh": [
        "A 的相关排名精确率为 1/2、2/4、3/6、4/8，均为 0.5，因此 AP_A=0.5。",
        "AP_B=(1/1+2/4)/2=0.75。",
        "MAP=(0.5+0.75)/2=0.625。",
        "AP_A@5=(0.5+0.5)/4=0.25；未取回的相关项不从题设分母中删去。"
      ],
      "resultZh": "AP_A=0.5，AP_B=0.75，MAP=0.625，AP_A@5=0.25。",
      "practiceZh": "R=3，相关结果只在第 1、3 位；按全部已知相关数作分母求 AP。",
      "keyZh": "(1+2/3)/3=5/9≈0.555556。",
      "tipEn": "Some implementations use min(R,k) or another convention. Follow the question. MAP is not one pooled average over all relevant ranks."
    },
    {
      "id": "C29",
      "topic": "RR, MRR, ERR and RBP",
      "q": "Three queries have first relevant ranks 1,4 and none. Compute MRR. For another list, satisfaction probabilities at ranks 1 and 2 are 0.5 and 0.5; compute ERR@2. For binary relevance [1,0,1], compute RBP@3 with persistence p=0.8.",
      "formula": "MRR=(1/Q)sum_q [1/r_first(q)], with 0 for no relevant result\nERR@K=sum_(k=1..K) [r_k/k × product_(i<k)(1-r_i)]\nRBP@K=(1-p)sum_(k=1..K) rel(k)p^(k-1)",
      "steps": [
        "MRR=(1+1/4+0)/3=5/12≈0.416667.",
        "ERR=0.5/1 + (1-0.5)×0.5/2=0.625.",
        "RBP=0.2(1+0×0.8+1×0.8²)=0.328. The maximum unobserved tail contribution is p³=0.512 for binary relevance."
      ],
      "result": "MRR≈0.416667; ERR@2=0.625; truncated RBP=0.328.",
      "zh": "ERR 的 r_k 是停止/满意概率，不直接把任意 graded label 填进去。RBP 是课件提及指标的公式扩展。",
      "source": "W08 pp.43-45; sample metric appendix",
      "practice": "If the first relevant document is at rank 5, what is RR?",
      "key": "0.2. Later relevant documents do not change RR.",
      "level": "Core practice",
      "topicZh": "RR、MRR、ERR 与 RBP",
      "qZh": "三个查询首个相关结果排名为 1、4、未找到，求 MRR。另一个列表第 1、2 位的满意概率均为 0.5，求 ERR@2。二值相关列表 [1,0,1]、持续参数 p=0.8，求 RBP@3。",
      "formulaZh": "MRR 平均首个相关排名的倒数；ERR 用“此前未满足且在此满足”的概率给 1/k 加权；RBP 第 k 位权重为 (1−p)p^(k−1)。",
      "stepsZh": [
        "MRR=(1+1/4+0)/3=5/12≈0.416667。",
        "ERR=0.5/1+(1−0.5)×0.5/2=0.625。",
        "RBP=0.2(1+0×0.8+1×0.8²)=0.328；二值相关性下，未观察尾部的最大贡献为 p³=0.512。"
      ],
      "resultZh": "MRR≈0.416667；ERR@2=0.625；截断 RBP=0.328。",
      "practiceZh": "首个相关文档在第 5 位，RR 是多少？",
      "keyZh": "0.2；后续相关文档不改变 RR。",
      "tipEn": "ERR requires satisfaction probabilities, not arbitrary graded labels directly. The RBP calculation extends a metric mentioned in the lecture."
    },
    {
      "id": "C30",
      "topic": "Graded DCG and nDCG",
      "q": "For relevance grades [0,2,1] at ranks 1-3, compute nDCG@3 using gain 2^rel-1 and discount log2(k+1). The ideal ranking uses the same three documents.",
      "formula": "DCG@K=sum_(k=1..K) (2^rel(k)-1)/log2(k+1)\nnDCG=DCG/IDCG, with a stated convention when IDCG=0",
      "steps": [
        "Actual gains are [0,3,1]. DCG=0+3/log2(3)+1/2≈2.392789.",
        "Ideal grades [2,1,0] give IDCG=3+1/log2(3)≈3.630930.",
        "nDCG≈2.392789/3.630930≈0.659002."
      ],
      "result": "nDCG@3≈0.659002.",
      "zh": "本题明确是 graded labels 才用于解释 nDCG；不建议把它当 A2 二值检索的主要选型依据。二值也可计算，但用途要论证。",
      "source": "W08 p.45; formula application extension",
      "practice": "What is nDCG for the ideal ordering when IDCG>0?",
      "key": "1.",
      "level": "Graded-relevance extension",
      "topicZh": "分级 DCG 与 nDCG",
      "qZh": "第 1–3 位相关等级为 [0,2,1]；收益用 2^rel−1，折扣用 log2(k+1)，计算 nDCG@3。理想排名只重排同样三篇文档。",
      "formulaZh": "DCG 对各排名的收益/折扣求和；nDCG=DCG/理想 DCG；理想 DCG 为零时需说明约定。",
      "stepsZh": [
        "实际收益为 [0,3,1]；DCG=0+3/log2(3)+1/2≈2.392789。",
        "理想等级 [2,1,0]，IDCG=3+1/log2(3)≈3.630930。",
        "nDCG≈2.392789/3.630930≈0.659002。"
      ],
      "resultZh": "nDCG@3≈0.659002。",
      "practiceZh": "IDCG>0 时，理想排名的 nDCG 是多少？",
      "keyZh": "1。",
      "tipEn": "This example explicitly uses graded relevance. Binary nDCG is computable, but using it as the primary A2 selection criterion needs justification."
    },
    {
      "id": "C31",
      "topic": "QA exact match, token F1 and overlap",
      "q": "Gold answer: “Zone Improvement Plan”. Prediction: “the Zone Improvement Plan code”. Apply lowercase, punctuation/article removal and whitespace normalisation; then compute EM and token F1.",
      "formula": "P=multiset overlap/prediction token count\nR=multiset overlap/gold token count\nF1=2PR/(P+R); EM=1[normalised strings equal]",
      "steps": [
        "Normalised gold is “zone improvement plan” (3 tokens); prediction is “zone improvement plan code” (4 tokens).",
        "Overlap=3, so P=3/4 and R=1.",
        "EM=0 and F1=2×0.75/(1.75)=6/7≈0.857143.",
        "A unigram-overlap recall metric would be 1 here, demonstrating that recall alone does not penalise the extra word."
      ],
      "result": "EM=0; token F1≈0.857143.",
      "zh": "文章词移除规则要一致；overlap 用次数的交集。多个 gold 先取该题最高分，再平均各题。",
      "source": "W11 pp.92-94; W08 pp.46-47",
      "practice": "Gold “red red car”, prediction “red car car”: find multiset overlap and F1 without article removal.",
      "key": "Overlap=2, P=R=2/3, F1=2/3; EM=0.",
      "level": "Core practice",
      "topicZh": "问答精确匹配、token F1 与重叠",
      "qZh": "金标准答案为 Zone Improvement Plan，预测为 the Zone Improvement Plan code。应用小写化、标点/冠词删除及空白规范化后，计算 EM 和 token F1。",
      "formulaZh": "P=多重集合重叠数/预测 token 数；R=重叠数/答案 token 数；F1 为调和平均，EM 判断规范化字符串是否完全相等。",
      "stepsZh": [
        "规范化答案为 zone improvement plan，共 3 token；预测为 zone improvement plan code，共 4 token。",
        "重叠为 3，所以 P=3/4、R=1。",
        "EM=0；F1=2×0.75/1.75=6/7≈0.857143。",
        "一元重叠召回率在这里为 1，说明只看召回率不会惩罚多余的词。"
      ],
      "resultZh": "EM=0；token F1≈0.857143。",
      "practiceZh": "答案 red red car，预测 red car car；不删除冠词，求多重集合重叠与 F1。",
      "keyZh": "重叠为 2，P=R=2/3，F1=2/3，EM=0。",
      "tipEn": "Apply article-removal rules consistently and count multiset overlap. With multiple references, maximise within a question before averaging over questions."
    },
    {
      "id": "C32",
      "topic": "Scaled dot-product attention",
      "q": "One query is q=(1,0); keys are k1=(1,0), k2=(0,1); values are v1=(2,0), v2=(0,4). Set d_k=2. Compute scaled scores, weights and output. Then mask the second key.",
      "formula": "Attention(Q,K,V)=softmax(QKᵀ/sqrt(d_k)+M)V\nMasked positions use -infinity before softmax.",
      "steps": [
        "Dot products are (1,0), scaled to (1/sqrt2,0)≈(0.707107,0).",
        "Weights are exp(0.707107)/(exp(0.707107)+1)≈0.669762 and 0.330238.",
        "Output=0.669762(2,0)+0.330238(0,4)≈(1.339523,1.320954).",
        "Masking key 2 gives weights (1,0) and output (2,0). Setting its score merely to 0 would not mask it."
      ],
      "result": "Unmasked output≈(1.339523,1.320954); masked output=(2,0).",
      "zh": "先算 QKᵀ，再 scale，再 mask，再 softmax，再乘 V；最后不能把权重直接当输出向量。",
      "source": "W09 pp.29,47-53",
      "practice": "If both unmasked scores are equal, what is the weighted output here?",
      "key": "Weights=(0.5,0.5), output=(1,2).",
      "level": "Core practice",
      "topicZh": "缩放点积注意力",
      "qZh": "q=(1,0)，k1=(1,0)、k2=(0,1)，v1=(2,0)、v2=(0,4)，d_k=2。求缩放得分、注意力权重和输出；再屏蔽第二个 key。",
      "formulaZh": "先算 QKᵀ，除以 √d_k，加掩码，再做 softmax，最后乘 V；屏蔽位置在 softmax 前加负无穷。",
      "stepsZh": [
        "点积为 (1,0)，缩放后为 (1/√2,0)≈(0.707107,0)。",
        "权重为 exp(0.707107)/(exp(0.707107)+1)≈0.669762，以及 0.330238。",
        "输出=0.669762(2,0)+0.330238(0,4)≈(1.339523,1.320954)。",
        "屏蔽 key 2 后权重=(1,0)，输出=(2,0)；仅把其得分设为 0 并不能屏蔽。"
      ],
      "resultZh": "未屏蔽输出≈(1.339523,1.320954)；屏蔽后=(2,0)。",
      "practiceZh": "若两个未屏蔽得分相等，本题加权输出是多少？",
      "keyZh": "权重=(0.5,0.5)，输出=(1,2)。",
      "tipEn": "Keep the order: dot products, scaling, masking, softmax, then value mixing. Attention weights are not themselves the output vector."
    },
    {
      "id": "C33",
      "topic": "LayerNorm, RMSNorm and positions",
      "q": "For x=(1,3), compute LayerNorm and RMSNorm with scale=1, bias=0 and epsilon=0. For sinusoidal encoding, give the first two coordinates at position 0.",
      "formula": "LayerNorm(x)=(x-mean(x))/sqrt(mean((x-mean(x))²)+ε)\nRMSNorm(x)=x/sqrt(mean(x²)+ε)\nPE(pos,2i)=sin(pos/10000^(2i/d)); PE(pos,2i+1)=cos(...)",
      "steps": [
        "Mean=2 and population variance=((1-2)²+(3-2)²)/2=1, so LayerNorm=(-1,1).",
        "RMS=sqrt((1²+3²)/2)=sqrt5, so RMSNorm=(1/sqrt5,3/sqrt5)≈(0.447214,1.341641).",
        "At position 0, sin0=0 and cos0=1, so the first two position coordinates are (0,1)."
      ],
      "result": "LayerNorm centres; RMSNorm does not. Position vectors are not learned token frequencies.",
      "zh": "分母用 population variance，不是无偏样本方差。ε=0 只是本题简化，实际实现要避免除零。",
      "source": "W09 pp.60-64,71",
      "practice": "Is the mean of the RMS-normalised vector necessarily zero?",
      "key": "No; only LayerNorm explicitly subtracts the mean.",
      "level": "Core practice",
      "topicZh": "LayerNorm、RMSNorm 与位置编码",
      "qZh": "x=(1,3)，缩放参数=1、偏置=0、ε=0，求 LayerNorm 和 RMSNorm；再给出位置 0 的正弦位置编码前两个坐标。",
      "formulaZh": "LayerNorm 先减特征均值再除以总体标准差；RMSNorm 只除以均方根；正弦编码的偶数维用 sin、奇数维用 cos。",
      "stepsZh": [
        "均值=2；总体方差=((1−2)²+(3−2)²)/2=1，因此 LayerNorm=(−1,1)。",
        "RMS=√((1²+3²)/2)=√5，因此 RMSNorm=(1/√5,3/√5)≈(0.447214,1.341641)。",
        "位置 0 时 sin0=0、cos0=1，前两个坐标为 (0,1)。"
      ],
      "resultZh": "LayerNorm 会中心化，RMSNorm 不会；位置向量不是学习得到的词频。",
      "practiceZh": "RMS 归一化后向量均值必为 0 吗？",
      "keyZh": "不是；只有 LayerNorm 显式减均值。",
      "tipEn": "Use population variance, not an unbiased sample estimate. Epsilon zero is a simplification here; real implementations guard against division by zero."
    },
    {
      "id": "C34",
      "topic": "BERT masking proportions",
      "q": "A batch has 1,000 eligible tokens. Under the original BERT procedure, compute the expected number selected for prediction, replaced by [MASK], replaced by random tokens and left unchanged but still predicted.",
      "formula": "Selected=0.15N\nMASK=0.8×Selected; random=0.1×Selected; unchanged target=0.1×Selected",
      "steps": [
        "Selected targets: 1,000×0.15=150.",
        "[MASK]: 150×0.8=120. Random replacements: 150×0.1=15.",
        "Unchanged targets: 15. Not selected: 850; these are different from the unchanged prediction targets."
      ],
      "result": "Expected counts: 150 selected; 120 masked; 15 random; 15 unchanged targets; 850 unselected.",
      "zh": "题目若问 expected counts，用期望值；实际随机抽样不必恰好等于这些数。",
      "source": "W09 pp.19-21; E25 Q25",
      "practice": "What fraction of all eligible tokens is replaced by [MASK] in expectation?",
      "key": "0.15×0.8=0.12, or 12%.",
      "level": "Core practice",
      "topicZh": "BERT 掩码比例",
      "qZh": "一批有 1,000 个可选择 token。按原始 BERT 规则，计算被选作预测目标、替换为 [MASK]、随机替换、保留原词但仍预测的期望数量。",
      "formulaZh": "选中数=0.15N；选中部分的 80% 换 MASK、10% 随机替换、10% 原样保留。",
      "stepsZh": [
        "选中目标数=1,000×0.15=150。",
        "MASK 数=150×0.8=120；随机替换数=150×0.1=15。",
        "保留原样但仍预测的目标为 15；未选中为 850，两者概念不同。"
      ],
      "resultZh": "期望：选中 150，MASK 120，随机 15，原样目标 15，未选中 850。",
      "practiceZh": "所有可选 token 中，预期被替换为 MASK 的比例是多少？",
      "keyZh": "0.15×0.8=0.12，即 12%。",
      "tipEn": "These are expected counts; an actual random sample need not contain exactly these numbers."
    },
    {
      "id": "C35",
      "topic": "KV-cache memory and attention scaling",
      "q": "Estimate a KV cache for batch B=1, L=2 layers, context T=100 tokens, H_kv=4 heads, head dimension d=8 and 2 bytes per value. Compare GQA with H_kv=1. If full dense attention length doubles, what happens to the pairwise-score count?",
      "formula": "KV bytes=2 × B × L × T × H_kv × d × bytes_per_value\nThe leading 2 counts keys and values.\nAttention score entries per head = T².",
      "steps": [
        "Cache=2×1×2×100×4×8×2=25,600 bytes, or 25 KiB.",
        "With one KV head: 6,400 bytes, or 6.25 KiB, a factor of 4 reduction at fixed dimensions.",
        "Doubling T changes T² to 4T². This describes dense attention pairs, not every component of total runtime.",
        "The estimate excludes model weights, temporary activations, allocator overhead and other implementation details."
      ],
      "result": "25 KiB versus 6.25 KiB; pairwise attention entries quadruple.",
      "zh": "1 KiB=1024 bytes；先写维度和单位。MQA/GQA 改的是 KV head 数，不是 query head 数。",
      "source": "W09 pp.76-79,98-100",
      "practice": "At fixed shape, what happens to cache memory when batch size triples?",
      "key": "It triples.",
      "level": "Core practice",
      "topicZh": "KV 缓存内存与注意力缩放",
      "qZh": "B=1、L=2 层、T=100 token、H_kv=4、头维 d=8、每值 2 bytes，估计 KV 缓存。与 H_kv=1 比较。完整稠密注意力的长度翻倍时，成对得分数如何变化？",
      "formulaZh": "KV bytes=2×B×L×T×H_kv×d×每值字节数；开头的 2 代表 key 和 value；每头注意力得分数为 T²。",
      "stepsZh": [
        "缓存=2×1×2×100×4×8×2=25,600 bytes=25 KiB。",
        "只有一个 KV 头时为 6,400 bytes=6.25 KiB，在其他维度固定时缩小 4 倍。",
        "T 翻倍后 T² 变为 4T²；这只描述稠密注意力配对，不代表总运行时间各部分都乘 4。",
        "估计未包括权重、临时激活、分配器开销及其他实现细节。"
      ],
      "resultZh": "25 KiB 对比 6.25 KiB；注意力配对条目增为 4 倍。",
      "practiceZh": "其他维度不变，批次大小变为三倍，缓存内存如何变化？",
      "keyZh": "变为三倍。",
      "tipEn": "1 KiB=1024 bytes. Write dimensions and units. MQA/GQA changes KV-head count, not query-head count."
    },
    {
      "id": "C36",
      "topic": "Beam search and length penalties",
      "q": "Step 1 has P(A)=0.6 and P(B)=0.4. At step 2, after A the continuation probabilities are x:0.3,y:0.3,z:0.2,w:0.2; after B they are x:0.9,y:0.1. Compare greedy with beam width 2, using lexicographic tie-breaking. Separately compare finished hypotheses with (log score,length)=(-2,2) and (-3,4).",
      "formula": "Sequence score=product probabilities, or sum log probabilities\nLength-normalised score=log_score/length^α",
      "steps": [
        "Greedy chooses A then x, score=0.6×0.3=0.18.",
        "Width 2 keeps A and B initially; expanded candidates include Bx=0.36, Ax=0.18, Ay=0.18, Az=0.12, Aw=0.12 and By=0.04.",
        "The top two are Bx and Ax, so the best beam result is Bx with 0.36.",
        "For completed sequences, raw scores favour -2; with α=1, scores are -1 and -0.75, so the longer second hypothesis wins under this changed objective."
      ],
      "result": "Greedy need not find the best sequence; length normalisation can change the preferred completed output.",
      "zh": "每一步在所有扩展中全局取 top-k；概率要乘前缀。负 log 分数越大越好，即越不负越好。",
      "source": "W11 pp.13-27",
      "practice": "For beam width 2, choose among cumulative log scores -3.82,-2.67,-3.32,-3.61.",
      "key": "-2.67 and -3.32.",
      "level": "Core practice",
      "topicZh": "束搜索与长度惩罚",
      "qZh": "第 1 步 P(A)=0.6、P(B)=0.4。A 后续为 x:0.3、y:0.3、z:0.2、w:0.2；B 后续为 x:0.9、y:0.1。并列时按字典序，比较贪心与宽度 2 的束搜索。再比较两个结束序列的(对数得分,长度)=(−2,2)、(−3,4)。",
      "formulaZh": "序列得分为概率乘积或对数概率之和；长度归一化分数=对数得分/长度^α。",
      "stepsZh": [
        "贪心先选 A 再选 x，得分=0.6×0.3=0.18。",
        "宽度 2 首先保留 A、B；扩展包括 Bx=0.36、Ax=Ay=0.18、Az=Aw=0.12、By=0.04。",
        "全局前两名为 Bx、Ax，所以最佳束结果为 Bx，得分 0.36。",
        "结束序列原始分数更偏好 −2；α=1 时得分为 −1、−0.75，因此新目标更偏好第二个较长序列。"
      ],
      "resultZh": "贪心不保证找到最佳序列；长度归一化可能改变偏好的完整输出。",
      "practiceZh": "束宽 2，从累计对数分数 −3.82、−2.67、−3.32、−3.61 中选择。",
      "keyZh": "−2.67 和 −3.32。",
      "tipEn": "Select global top-k among all expansions and include prefix probabilities. A larger (less negative) log score is better."
    },
    {
      "id": "C37",
      "topic": "Top-k, nucleus and temperature",
      "q": "Next-token probabilities are cat 0.50, dog 0.20, bird 0.15, fish 0.10, rock 0.05. Compute top-3 and nucleus-p=0.9 candidate sets and renormalised cat probabilities. Then compute the top-token probability for logits (2,1,0) at temperatures 1 and 0.5.",
      "formula": "Top-k: keep k highest probabilities and renormalise\nNucleus: smallest sorted prefix with cumulative mass >= p\np_tau(i)=exp(z_i/tau)/sum_j exp(z_j/tau)",
      "steps": [
        "Top-3 keeps cat,dog,bird, total mass 0.85; P(cat)=0.5/0.85=10/17≈0.588235.",
        "Cumulative masses are 0.5,0.7,0.85,0.95; nucleus keeps four tokens, giving P(cat)=0.5/0.95=10/19≈0.526316.",
        "At τ=1, top probability=e²/(e²+e+1)≈0.665241.",
        "At τ=0.5, logits become (4,2,0), giving e⁴/(e⁴+e²+1)≈0.866813."
      ],
      "result": "Top-3 and top-p=0.9 are different truncations; lower temperature sharpens this distribution.",
      "zh": "top-p 保留最后一个使累计概率达到阈值的词；不能在 0.85 就停止。",
      "source": "W11 pp.30-36",
      "practice": "For logits (2,1,0), what happens as temperature tends to infinity?",
      "key": "Probabilities tend to (1/3,1/3,1/3).",
      "level": "Core practice",
      "topicZh": "Top-k、核采样与温度",
      "qZh": "下一词概率 cat=0.50、dog=0.20、bird=0.15、fish=0.10、rock=0.05。求 top-3 和 nucleus p=0.9 的候选集及归一化后的 cat 概率；再求 logits=(2,1,0) 在温度 1、0.5 时最高词概率。",
      "formulaZh": "Top-k 保留概率最高 k 项并归一化；核采样保留累计质量达到 p 的最短排序前缀；温度概率=softmax(z/τ)。",
      "stepsZh": [
        "Top-3 保留 cat、dog、bird，总质量 0.85；cat=0.5/0.85=10/17≈0.588235。",
        "累计质量为 0.5、0.7、0.85、0.95，因此核采样保留四个词，cat=0.5/0.95=10/19≈0.526316。",
        "τ=1 时，最高概率=e²/(e²+e+1)≈0.665241。",
        "τ=0.5 时 logits=(4,2,0)，最高概率=e⁴/(e⁴+e²+1)≈0.866813。"
      ],
      "resultZh": "Top-3 与 top-p=0.9 的截断不同；较低温度使本分布更尖锐。",
      "practiceZh": "对 logits=(2,1,0)，温度趋于无穷大时会怎样？",
      "keyZh": "概率趋于 (1/3,1/3,1/3)。",
      "tipEn": "Top-p includes the final token that reaches the threshold; stopping at cumulative mass 0.85 would be wrong here."
    },
    {
      "id": "C38",
      "topic": "Entropy, surprisal and typicality",
      "q": "A distribution over A,B,C is (0.5,0.25,0.25). Compute token surprisals in bits, entropy and each token’s distance from entropy. What does this tell you about typical sampling?",
      "formula": "I(w)=-log2 p(w)\nH=sum_w p(w)I(w)\nTypicality distance=|I(w)-H|",
      "steps": [
        "Surprisals are (1,2,2) bits.",
        "H=0.5×1+0.25×2+0.25×2=1.5 bits.",
        "Distances are (0.5,0.5,0.5); every token is tied on this typicality criterion.",
        "Thus, the ranking by probability need not match the ranking by closeness to expected information; a tie convention and mass threshold are needed to form a particular sample set."
      ],
      "result": "H=1.5 bits; this example does not uniquely determine a typical set without a tie rule.",
      "zh": "entropy 是对整个分布的期望，不是每个词各有一个 H；surprisal 才随词变化。",
      "source": "W11 pp.47-50",
      "practice": "For probabilities (0.9,0.1), is the rare token closer to the entropy?",
      "key": "No. H≈0.468996; surprisals≈0.152003 and 3.321928; distances≈0.316993 and 2.852933.",
      "level": "Core practice",
      "topicZh": "熵、惊异度与典型性",
      "qZh": "A、B、C 的概率为 (0.5,0.25,0.25)，求以 bit 计的 token 惊异度、熵，以及各 token 惊异度与熵的距离。这对典型采样意味着什么？",
      "formulaZh": "惊异度 I(w)=−log2 p(w)；熵 H=Σp(w)I(w)；典型性距离=|I(w)−H|。",
      "stepsZh": [
        "惊异度为 (1,2,2) bits。",
        "H=0.5×1+0.25×2+0.25×2=1.5 bits。",
        "距离为 (0.5,0.5,0.5)，所以所有 token 在这个典型性标准下并列。",
        "按概率排序不一定等于按接近期望信息量排序；确定具体候选集还需并列处理规则和概率质量阈值。"
      ],
      "resultZh": "H=1.5 bits；没有并列处理规则时，无法唯一确定典型集。",
      "practiceZh": "概率为 (0.9,0.1)，稀有 token 是否更接近熵？",
      "keyZh": "不是。H≈0.468996；惊异度≈0.152003、3.321928；距离≈0.316993、2.852933。",
      "tipEn": "Entropy is an expectation over the entire distribution; surprisal varies by token, not a separate entropy for each token."
    },
    {
      "id": "C39",
      "topic": "Cohen’s kappa",
      "q": "Two annotators label 100 items. With rows B=puppy,chicken and columns A=puppy,chicken, the table is [[50,5],[10,35]]. Compute observed agreement, expected agreement and kappa.",
      "formula": "p_o=sum diagonal/N\np_e=sum_categories P(A=c)P(B=c)\nκ=(p_o-p_e)/(1-p_e)",
      "steps": [
        "Observed agreement=(50+35)/100=0.85.",
        "A marginals are (60,40)/100=(0.6,0.4); B marginals are (55,45)/100=(0.55,0.45).",
        "p_e=0.6×0.55+0.4×0.45=0.51.",
        "κ=(0.85-0.51)/(1-0.51)=0.34/0.49≈0.693878."
      ],
      "result": "Kappa≈0.693878. Interpret in task context rather than treating a verbal threshold as universal.",
      "zh": "p_e 由各标注员自己的 marginal 算；不要直接用 accuracy 或对角线概率平方代替。",
      "source": "W12 pp.56-64",
      "practice": "Both label 5 of 100 items toxic, but never the same item; raw agreement is 90%. Find κ.",
      "key": "p_e=0.05²+0.95²=0.905; κ=(0.9-0.905)/0.095≈-0.052632.",
      "level": "Core practice",
      "topicZh": "Cohen κ",
      "qZh": "两名标注者标注 100 项。行 B=(puppy,chicken)，列 A=(puppy,chicken)，表为 [[50,5],[10,35]]。求观察一致率、机会一致率和 κ。",
      "formulaZh": "p_o=对角线之和/N；p_e=Σ类别 P(A=类别)P(B=类别)；κ=(p_o−p_e)/(1−p_e)。",
      "stepsZh": [
        "观察一致率=(50+35)/100=0.85。",
        "A 边际=(60,40)/100=(0.6,0.4)；B 边际=(55,45)/100=(0.55,0.45)。",
        "p_e=0.6×0.55+0.4×0.45=0.51。",
        "κ=(0.85−0.51)/(1−0.51)=0.34/0.49≈0.693878。"
      ],
      "resultZh": "κ≈0.693878，应结合任务解释，不把文字等级阈值视为普遍标准。",
      "practiceZh": "两人各标 100 项中的 5 项为 toxic，但从不重叠，原始一致率为 90%，求 κ。",
      "keyZh": "p_e=0.05²+0.95²=0.905；κ=(0.9−0.905)/0.095≈−0.052632。",
      "tipEn": "Expected agreement uses each rater’s own marginals, not accuracy or squared diagonal probabilities."
    },
    {
      "id": "C40",
      "topic": "Fleiss’ kappa",
      "q": "Four items each receive five ratings in two categories. Category-count rows are (5,0), (3,2), (0,5), (4,1). Compute per-item agreement, pooled category proportions and Fleiss’ kappa.",
      "formula": "P_i=sum_j n_ij(n_ij-1)/[n(n-1)]\nP_o=mean_i P_i; p_j=sum_i n_ij/(Nn)\nP_e=sum_j p_j²; κ=(P_o-P_e)/(1-P_e)",
      "steps": [
        "n(n-1)=5×4=20. P_i values are 20/20,8/20,20/20,12/20 = (1,0.4,1,0.6).",
        "P_o=(1+0.4+1+0.6)/4=0.75.",
        "Pooled label counts are (12,8), giving proportions (0.6,0.4) and P_e=0.52.",
        "κ=(0.75-0.52)/(1-0.52)=0.23/0.48≈0.479167."
      ],
      "result": "Fleiss’ κ≈0.479167.",
      "zh": "3:2 的多数不是 60% pair agreement，而是 40%；分母是有序不同标注员 pair 数 n(n-1)。",
      "source": "W12 pp.65-79",
      "practice": "For one item with four annotators split (3,1), what is P_i?",
      "key": "(3×2+1×0)/(4×3)=0.5.",
      "level": "Core practice",
      "topicZh": "Fleiss κ",
      "qZh": "四个项目各获 5 次、两类别标注，类别计数行为 (5,0)、(3,2)、(0,5)、(4,1)。求每项一致率、汇总类别比例和 Fleiss κ。",
      "formulaZh": "P_i=Σ_j n_ij(n_ij−1)/[n(n−1)]；P_o 为各项平均；p_j 为汇总类别比例；P_e=Σp_j²；κ=(P_o−P_e)/(1−P_e)。",
      "stepsZh": [
        "分母 5×4=20；各项 P_i=(20/20,8/20,20/20,12/20)=(1,0.4,1,0.6)。",
        "P_o=(1+0.4+1+0.6)/4=0.75。",
        "汇总计数=(12,8)，比例=(0.6,0.4)，P_e=0.52。",
        "κ=(0.75−0.52)/(1−0.52)=0.23/0.48≈0.479167。"
      ],
      "resultZh": "Fleiss κ≈0.479167。",
      "practiceZh": "4 名标注者按 (3,1) 分成两类，该项 P_i 是多少？",
      "keyZh": "(3×2+1×0)/(4×3)=0.5。",
      "tipEn": "A 3:2 majority gives 40%, not 60%, pairwise agreement. The denominator n(n−1) counts ordered pairs of distinct raters."
    },
    {
      "id": "C41",
      "topic": "WEAT association statistic and effect size",
      "q": "Suppose s(w,A,B), the difference between mean cosine to A and B, has values X=(0.4,0.2), Y=(-0.2,-0.4). Compute the WEAT sum statistic and an effect size using the population SD over all four s-values. Do not infer a p-value from effect size alone.",
      "formula": "s(w,A,B)=mean_a cos(w,a)-mean_b cos(w,b)\nT=sum_x s(x,A,B)-sum_y s(y,A,B)\nd=[mean_X(s)-mean_Y(s)]/SD_(X union Y)(s)",
      "steps": [
        "T=(0.4+0.2)-(-0.2-0.4)=1.2.",
        "Mean_X=0.3; mean_Y=-0.3; pooled mean=0.",
        "Population variance=(0.16+0.04+0.04+0.16)/4=0.1; SD=sqrt0.1.",
        "d=0.6/sqrt0.1≈1.897367. A sample-SD convention would give a different numeric effect size and must be stated."
      ],
      "result": "Statistic T=1.2; specified effect size d≈1.897367; significance requires a permutation procedure.",
      "zh": "这反映给定词表的关联差异，不证明群体特征，也不保证下游是否公平。",
      "source": "W12 pp.37-45",
      "practice": "If mean cosine to A is 0.7 and to B is 0.2 for a word, what is s?",
      "key": "0.5.",
      "level": "Lecture-based extension",
      "topicZh": "WEAT 关联统计量与效应量",
      "qZh": "s(w,A,B) 是到 A、B 平均余弦的差。X 中值为 (0.4,0.2)，Y 中值为 (−0.2,−0.4)。求 WEAT 求和统计量，并按全部四值的总体标准差求效应量。不能仅由效应量推断 p 值。",
      "formulaZh": "s 为两组属性平均余弦之差；T=Σ_X s−Σ_Y s；d=(X 均值−Y 均值)/合并后的标准差。",
      "stepsZh": [
        "T=(0.4+0.2)−(−0.2−0.4)=1.2。",
        "X 均值=0.3，Y 均值=−0.3，合并均值=0。",
        "总体方差=(0.16+0.04+0.04+0.16)/4=0.1，SD=√0.1。",
        "d=0.6/√0.1≈1.897367；若用样本标准差会得到不同数值，必须说明约定。"
      ],
      "resultZh": "T=1.2；题设效应量 d≈1.897367；显著性需置换检验。",
      "practiceZh": "某词到 A 的平均余弦 0.7，到 B 为 0.2，s 是多少？",
      "keyZh": "0.5。",
      "tipEn": "This measures association differences for selected word sets, not inherent group traits or guaranteed downstream fairness."
    },
    {
      "id": "C42",
      "topic": "Spectral attribute removal projection",
      "q": "A protected direction is the unit vector u=(1,0)ᵀ. Project x=(3,4)ᵀ onto its orthogonal complement. Then use u=(1,1)ᵀ/sqrt2.",
      "formula": "x_new=(I-u uᵀ)x = x-u(uᵀx)\nFor several orthonormal directions, use I-U_k U_kᵀ.",
      "steps": [
        "For u=(1,0), uᵀx=3 and the removed component is (3,0), leaving (0,4).",
        "For u=(1,1)/sqrt2, uᵀx=7/sqrt2.",
        "Removed component=(3.5,3.5), leaving (-0.5,0.5). Its dot product with u is zero."
      ],
      "result": "Projected vectors: (0,4) and (-0.5,0.5).",
      "zh": "u 必须单位化；删除线性方向不等于清除所有非线性属性信息。求 SVD 本身不是本题要求。",
      "source": "W12 pp.106-112",
      "practice": "What happens if x already lies orthogonal to u?",
      "key": "It is unchanged.",
      "level": "Lecture-based extension",
      "topicZh": "谱属性移除的投影",
      "qZh": "受保护方向为单位向量 u=(1,0)ᵀ，将 x=(3,4)ᵀ 投影到其正交补；再改用 u=(1,1)ᵀ/√2。",
      "formulaZh": "投影 x新=(I−uuᵀ)x=x−u(uᵀx)；若有多个正交单位方向，则用 I−U_kU_kᵀ。",
      "stepsZh": [
        "u=(1,0) 时，uᵀx=3，移除分量 (3,0)，留下 (0,4)。",
        "u=(1,1)/√2 时，uᵀx=7/√2。",
        "移除分量=(3.5,3.5)，留下 (−0.5,0.5)，其与 u 的点积为 0。"
      ],
      "resultZh": "两个投影结果为 (0,4) 和 (−0.5,0.5)。",
      "practiceZh": "如果 x 本来就与 u 正交，结果如何？",
      "keyZh": "x 不变。",
      "tipEn": "Normalise u first. Removing a linear direction does not remove every nonlinear trace of the attribute. Computing the SVD is not required here."
    },
    {
      "id": "C43",
      "topic": "Group metrics and incompatible fairness goals",
      "q": "Group A: TP=40,FN=10,FP=10,TN=40. Group B: TP=16,FN=4,FP=16,TN=64. Compute TPR, FPR and positive predictive value (PPV) for each group. Both groups contain 100 people.",
      "formula": "TPR=TP/(TP+FN); FPR=FP/(FP+TN)\nPPV=TP/(TP+FP)\nPPV=[TPR×prevalence]/[TPR×prevalence+FPR×(1-prevalence)]",
      "steps": [
        "A: prevalence=0.5, TPR=40/50=0.8, FPR=10/50=0.2, PPV=40/50=0.8.",
        "B: prevalence=0.2, TPR=16/20=0.8, FPR=16/80=0.2, PPV=16/32=0.5.",
        "Both groups have equal TPR/FPR but different PPV, illustrating the trade-off when base rates differ.",
        "This is an arithmetic example, not evidence that one population is inherently riskier or that the data labels are unbiased."
      ],
      "result": "Equal error rates do not imply predictive parity in this example.",
      "zh": "不要把“相同 FPR 单独不可能与校准共存”当普遍定理；标准冲突涉及更完整的一组条件。",
      "source": "W12 pp.17-21; Chouldechova 2017",
      "practice": "For TP=9 and FP=1, what is PPV?",
      "key": "0.9.",
      "level": "Interpretation extension",
      "topicZh": "群体指标与冲突的公平目标",
      "qZh": "A 群体：TP=40、FN=10、FP=10、TN=40；B 群体：TP=16、FN=4、FP=16、TN=64。两组各 100 人，求 TPR、FPR、阳性预测值 PPV。",
      "formulaZh": "TPR=TP/(TP+FN)，FPR=FP/(FP+TN)，PPV=TP/(TP+FP)。也可由 TPR、FPR 和正例基础率计算 PPV。",
      "stepsZh": [
        "A：基础率=0.5，TPR=40/50=0.8，FPR=10/50=0.2，PPV=40/50=0.8。",
        "B：基础率=0.2，TPR=16/20=0.8，FPR=16/80=0.2，PPV=16/32=0.5。",
        "两组 TPR/FPR 相同，但 PPV 不同，说明基础率不同时存在权衡。",
        "这只是算术例子，不证明某群体本质上风险更高，也不证明标签无偏。"
      ],
      "resultZh": "本例中相同错误率不意味着预测值平等。",
      "practiceZh": "TP=9、FP=1 时，PPV 是多少？",
      "keyZh": "0.9。",
      "tipEn": "Do not claim that equal FPR alone can never coexist with calibration. Standard incompatibility results involve a fuller set of conditions."
    },
    {
      "id": "C44",
      "topic": "Paired comparisons and macro versus micro aggregation",
      "q": "On four queries, system A scores [1,1,0,0] and B scores [0,0,1,1]. Compare means and per-query wins. Separately, group 1 has 1 correct of 1 example and group 2 has 0 correct of 9 examples; compute macro group accuracy and pooled accuracy.",
      "formula": "Mean difference=mean_i (A_i-B_i)\nMacro group score=unweighted mean of group scores\nPooled accuracy=total correct/total examples",
      "steps": [
        "Both systems have mean 0.5, but differences are [1,1,-1,-1]: each wins on two queries and they never succeed on the same query.",
        "Group accuracies are 1 and 0, so macro group accuracy=0.5.",
        "Pooled accuracy=(1+0)/(1+9)=0.1.",
        "For a paired bootstrap of a score difference, resample common query indices and keep each A/B pair together; independent resampling discards the pairing."
      ],
      "result": "Equal averages can hide disjoint errors; macro and pooled aggregation can tell different stories.",
      "zh": "F1 的 micro 与平均各题 F1 还需看定义，不能只因“类别不平衡”就把所有平均都叫 micro。bootstrap 练习是方法扩展。",
      "source": "W08 pp.6,23-48,90-95; evaluation-method extension",
      "practice": "If paired differences are [0.2,0.1,-0.1,0], what is their mean?",
      "key": "0.05.",
      "level": "Study extension, not a claimed sample-exam topic",
      "topicZh": "配对比较、宏平均与汇总平均",
      "qZh": "四个查询上 A 得分 [1,1,0,0]，B 得分 [0,0,1,1]，比较均值和逐查询胜负。另有组 1：1 个样本答对 1 个；组 2：9 个样本答对 0 个。求宏群体准确率和汇总准确率。",
      "formulaZh": "平均差=逐样本差的平均；宏群体分数=各群体分数不加权平均；汇总准确率=总正确数/总样本数。",
      "stepsZh": [
        "两系统均值都为 0.5，但差为 [1,1,−1,−1]；各胜两题，从不在同一题上同时成功。",
        "群体准确率为 1、0，宏平均=(1+0)/2=0.5。",
        "汇总准确率=(1+0)/(1+9)=0.1。",
        "配对 bootstrap 应重采样共同查询索引，并保持 A/B 对不拆开；独立重采样会丢失配对信息。"
      ],
      "resultZh": "相同均值可掩盖不重叠的错误；宏平均和汇总指标可能给出不同结论。",
      "practiceZh": "配对差为 [0.2,0.1,−0.1,0]，均值是多少？",
      "keyZh": "0.05。",
      "tipEn": "Micro F1 and mean per-question F1 have distinct definitions. Do not call every imbalance-related average micro. Bootstrap is a study-method extension."
    },
    {
      "id": "C45",
      "topic": "Two-layer matrix backpropagation",
      "q": "Let x=(1,2)ᵀ, W1=I, b1=0, h=ReLU(W1x+b1), y_hat=w2ᵀh+b2, w2=(2,-1)ᵀ, b2=0 and y=1. Use L=0.5(y_hat-y)². Find gradients of both layers.",
      "formula": "δ_out=y_hat-y\n∇w2=δ_out h; ∇b2=δ_out\nδ_hidden=(w2 δ_out) elementwise_times ReLU'(z1)\n∇W1=δ_hidden xᵀ; ∇b1=δ_hidden",
      "steps": [
        "Forward: z1=h=(1,2)ᵀ; y_hat=2×1-1×2=0; L=0.5.",
        "δ_out=-1, so ∇w2=(-1,-2)ᵀ and ∇b2=-1.",
        "Both ReLU inputs are positive, so δ_hidden=(-2,1)ᵀ.",
        "The outer product gives ∇W1=[[-2,-4],[1,2]], and ∇b1=(-2,1)ᵀ. Use the original forward-pass weights for all these gradients before applying an update."
      ],
      "result": "Matrix shape is a correctness check: ∇W1 is 2×2 and ∇w2 is 2×1.",
      "zh": "先算 δ，再乘上一层 activation 的转置；不是把两个向量逐元素相乘得到矩阵。属于 W05 附录的巩固题。",
      "source": "W05 pp.139-158; appendix practice",
      "practice": "If η=0.1, what is the new w2 after gradient descent?",
      "key": "(2.1,-0.8)ᵀ.",
      "level": "Lecture appendix",
      "topicZh": "两层矩阵反向传播",
      "qZh": "x=(1,2)ᵀ，W1=I、b1=0，h=ReLU(W1x+b1)，预测值=w2ᵀh+b2，w2=(2,−1)ᵀ、b2=0、y=1；L=0.5(预测值−y)²。求两层梯度。",
      "formulaZh": "输出误差 δ_out=预测值−y；输出权重梯度=δ_out h；隐藏误差=(w2δ_out)逐元素乘 ReLU 导数；输入权重梯度为 δ_hidden xᵀ 外积。",
      "stepsZh": [
        "前向：z1=h=(1,2)ᵀ；预测=2×1−1×2=0；L=0.5。",
        "δ_out=−1，因此 ∇w2=(−1,−2)ᵀ，∇b2=−1。",
        "两个 ReLU 输入都为正，因此 δ_hidden=(−2,1)ᵀ。",
        "外积给出 ∇W1=[[-2,−4],[1,2]]，∇b1=(−2,1)ᵀ。所有梯度都用原前向权重求完，再更新。"
      ],
      "resultZh": "检查形状：∇W1 为 2×2，∇w2 为 2×1。",
      "practiceZh": "η=0.1 时，梯度下降后的 w2 是多少？",
      "keyZh": "(2.1,−0.8)ᵀ。",
      "tipEn": "Multiply delta by the previous activation transpose to form an outer product, not an elementwise vector product. This reinforces the W05 appendix."
    },
    {
      "id": "C46",
      "topic": "Multi-head dimensions, MoE storage and scaling",
      "q": "A standard attention layer has d_model=512 and 8 heads with d_k=d_v=64. Count WQ,WK,WV,WO parameters ignoring biases. An MoE has eight 1-billion-parameter experts plus 0.5 billion shared parameters and uses two experts per token. Estimate total and active parameters and fp16 weight storage.",
      "formula": "Standard MHA projection weights: 4 d_model²\nMoE total=P_shared+N_experts P_expert\nMoE active=P_shared+N_selected P_expert",
      "steps": [
        "Each full projection is 512×512; four projections have 4×512²=1,048,576 parameters. Eight 512×64 head projections collectively equal one 512×512 projection.",
        "MoE total=0.5+8×1=8.5 billion; active=0.5+2×1=2.5 billion.",
        "At 2 bytes per parameter, all weights occupy 17 billion bytes, about 15.83 GiB, before caches, activations, optimiser states or routing overhead.",
        "As a separate heuristic application, 20 training tokens per parameter would imply 140 billion tokens for a 7-billion-parameter model; this is not a universal optimum."
      ],
      "result": "More heads at fixed width do not automatically multiply projection parameters; inactive experts still require accessible storage.",
      "zh": "不要只按 active parameters 算模型总内存；GB 与 GiB 单位不同。",
      "source": "W09 pp.51-55,104-107",
      "practice": "What is the per-head dimension for d_model=768 with 12 equal heads?",
      "key": "64.",
      "level": "Architecture arithmetic extension",
      "topicZh": "多头维度、MoE 存储与缩放",
      "qZh": "标准注意力层 d_model=512、8 头、d_k=d_v=64，忽略偏置，求 WQ、WK、WV、WO 参数总量。MoE 有 8 个各 10 亿参数专家，加 5 亿共享参数，每 token 选 2 个专家，求总参数、活跃参数和 fp16 权重存储。",
      "formulaZh": "标准 MHA 投影参数=4d_model²；MoE 总量=共享+全部专家；活跃量=共享+被选专家。",
      "stepsZh": [
        "每个完整投影为 512×512，四个共 4×512²=1,048,576；8 个 512×64 的头投影合起来等于一个 512×512。",
        "MoE 总参数=0.5+8×1=8.5 billion；活跃=0.5+2×1=2.5 billion。",
        "每参数 2 bytes，总权重为 170 亿 bytes≈15.83 GiB，未包括缓存、激活、优化器状态或路由开销。",
        "另按每参数 20 个训练 token 的经验规则，70 亿参数模型需 1,400 亿 token；这不是普遍最优定律。"
      ],
      "resultZh": "固定宽度下更多头不会自动增加投影参数；未激活专家仍需可访问存储。",
      "practiceZh": "d_model=768、12 个等宽头，每头维度多少？",
      "keyZh": "64。",
      "tipEn": "Do not estimate total model memory from active parameters alone. GB and GiB use different units."
    },
    {
      "id": "C47",
      "topic": "Logarithms, powers and summations",
      "q": "Without a calculator, evaluate log10(1000/10), log2(1/8), sum from i=1 to 10 of i, sum from i=0 to 4 of 2^i, and convert 2^20 bytes to MiB. Explain how these support NLP calculations.",
      "formula": "log_b(xy)=log_b x+log_b y; log_b(x/y)=log_b x-log_b y\nsum_(i=1..n) i=n(n+1)/2\nsum_(i=0..n) a^i=(a^(n+1)-1)/(a-1), a!=1",
      "steps": [
        "log10(1000/10)=log10(100)=2; log2(1/8)=-3.",
        "The integer sum is 10×11/2=55.",
        "The geometric sum is (2^5-1)/(2-1)=31.",
        "2^20 bytes is 1 MiB. Logs simplify probability products and IDF; powers and sums support sequence-space, parameter and memory calculations."
      ],
      "result": "Answers: 2, -3, 55, 31, 1 MiB.",
      "zh": "题目如果使用 KB/MB 但按 1024 进制，要说明自己的单位约定；未知底数不能一律当 log10。",
      "source": "E24/E25 formula appendices; W13 p.23",
      "practice": "Compute log10(10^-3) and 2^10.",
      "key": "-3 and 1024.",
      "level": "Mathematical toolkit",
      "topicZh": "对数、幂与求和",
      "qZh": "不用计算器，求 log10(1000/10)、log2(1/8)、1 到 10 的整数和、i=0 到 4 的 2^i 之和，并把 2^20 bytes 换成 MiB。说明这些运算如何支持 NLP 计算。",
      "formulaZh": "对数把乘除变加减；整数和为 n(n+1)/2；等比和为 (a^(n+1)−1)/(a−1)，a≠1。",
      "stepsZh": [
        "log10(1000/10)=log10(100)=2；log2(1/8)=−3。",
        "整数和=10×11/2=55。",
        "等比和=(2^5−1)/(2−1)=31。",
        "2^20 bytes=1 MiB；对数简化概率乘积与 IDF，幂和求和用于序列空间、参数及内存计算。"
      ],
      "resultZh": "答案依次为 2、−3、55、31、1 MiB。",
      "practiceZh": "计算 log10(10^−3) 和 2^10。",
      "keyZh": "−3 和 1024。",
      "tipEn": "State the unit convention if KB/MB is used with powers of 1024. Do not assume every unspecified logarithm is base 10."
    }
  ],
  "sources": [
    {
      "code": "W01",
      "file": "week01-lecture-v2.0.pdf",
      "pages": 68,
      "title": "Foundations of language and NLP",
      "titleZh": "语言与自然语言处理基础"
    },
    {
      "code": "W02",
      "file": "week02-lecture.pdf",
      "pages": 78,
      "title": "Language modelling",
      "titleZh": "语言建模"
    },
    {
      "code": "W03",
      "file": "week03-lecture.pdf",
      "pages": 95,
      "title": "Tagging and HMMs",
      "titleZh": "词性标注与隐马尔可夫模型"
    },
    {
      "code": "W04",
      "file": "week04-v1.1.pdf",
      "pages": 98,
      "title": "Parsing and information extraction",
      "titleZh": "句法分析与信息抽取"
    },
    {
      "code": "W05",
      "file": "week05-lecture.pdf",
      "pages": 162,
      "title": "Deep learning and backpropagation",
      "titleZh": "深度学习与反向传播"
    },
    {
      "code": "W06",
      "file": "week06-v1.1.pdf",
      "pages": 94,
      "title": "Semantic representation and embeddings",
      "titleZh": "语义表示与词嵌入"
    },
    {
      "code": "W07",
      "file": "week07-v1.1.pdf",
      "pages": 99,
      "title": "Information retrieval",
      "titleZh": "信息检索"
    },
    {
      "code": "W08",
      "file": "lecture-week8-v1.1.pdf",
      "pages": 98,
      "title": "RAG and evaluation",
      "titleZh": "检索增强生成与评价"
    },
    {
      "code": "W09",
      "file": "week09-lecture-v1.1.pdf",
      "pages": 109,
      "title": "Transformers and LLMs",
      "titleZh": "Transformer 与大语言模型"
    },
    {
      "code": "W11",
      "file": "week11-lecture-v1.2.pdf",
      "pages": 110,
      "title": "Decoding and question answering",
      "titleZh": "解码与问答"
    },
    {
      "code": "W12",
      "file": "week12-lecture-v1.1.pdf",
      "pages": 123,
      "title": "Fairness, annotation, safety and ethics",
      "titleZh": "公平性、标注、安全与伦理"
    },
    {
      "code": "W13",
      "file": "week13-lecture-v1.1.pdf",
      "pages": 27,
      "title": "Course review and exam guidance",
      "titleZh": "课程复习与考试指导"
    },
    {
      "code": "E25",
      "file": "exam-sample-2025.pdf",
      "pages": 12,
      "title": "2025 sample: 29 questions, 50 marks, 180 minutes",
      "titleZh": "2025 样卷：29 题、50 分、180 分钟"
    },
    {
      "code": "K25",
      "file": "exam-sample-2025-soln.pdf",
      "pages": 13,
      "title": "Solution paired with E25; several issues noted",
      "titleZh": "E25 配套参考解；已整理若干需澄清处"
    },
    {
      "code": "E24",
      "file": "Semester_Two_Examinations_2025_COMP4703_Sample.pdf",
      "pages": 15,
      "title": "Filename says 2025, but paper header says 2024: 37 questions",
      "titleZh": "文件名含 2025，但卷面年份为 2024：37 题"
    },
    {
      "code": "K24",
      "file": "sample-exam-key.pdf",
      "pages": 14,
      "title": "Older sample key; several issues noted",
      "titleZh": "旧样卷参考解；已整理若干需澄清处"
    }
  ],
  "coverage": [
    {
      "week": "01",
      "topic": "Language, formal structure, ambiguity",
      "topicZh": "语言、语言学与计算结构",
      "short": "S01.01-S01.09",
      "long": "L01-L02",
      "calc": "C09-C11"
    },
    {
      "week": "02",
      "topic": "LM, smoothing, evaluation",
      "topicZh": "语言模型、估计与评价",
      "short": "S02.01-S02.13",
      "long": "L03-L05",
      "calc": "C01-C05, C47"
    },
    {
      "week": "03",
      "topic": "POS, HMM, Viterbi, NER",
      "topicZh": "词性标注、HMM 与命名实体",
      "short": "S03.01-S03.11",
      "long": "L06-L07",
      "calc": "C06-C08"
    },
    {
      "week": "04",
      "topic": "Constituency, dependency, parsing, IE",
      "topicZh": "句法、分析算法与信息抽取",
      "short": "S04.01-S04.12",
      "long": "L08-L10",
      "calc": "C09-C11"
    },
    {
      "week": "05",
      "topic": "Neural learning and backpropagation",
      "topicZh": "神经网络、反向传播与训练",
      "short": "S05.01-S05.13",
      "long": "L11-L13",
      "calc": "C12-C16, C45"
    },
    {
      "week": "06",
      "topic": "Lexical semantics and embeddings",
      "topicZh": "词汇语义与词表示",
      "short": "S06.01-S06.15",
      "long": "L14-L16",
      "calc": "C18-C21"
    },
    {
      "week": "07",
      "topic": "Sparse/dense/hybrid retrieval",
      "topicZh": "信息检索与排序架构",
      "short": "S07.01-S07.17",
      "long": "L17-L19",
      "calc": "C22-C26"
    },
    {
      "week": "08",
      "topic": "Ranking metrics, RAG, failures",
      "topicZh": "评价与检索增强生成",
      "short": "S08.01-S08.14",
      "long": "L20-L22",
      "calc": "C27-C31, C44"
    },
    {
      "week": "09",
      "topic": "Attention, adaptation, serving",
      "topicZh": "Transformer、任务适配与高效 LLM",
      "short": "S09.01-S09.21",
      "long": "L23-L27",
      "calc": "C32-C35, C46"
    },
    {
      "week": "11",
      "topic": "Decoding and QA",
      "topicZh": "解码与问答",
      "short": "S11.01-S11.15",
      "long": "L28-L30",
      "calc": "C31, C36-C38"
    },
    {
      "week": "12",
      "topic": "FATE, annotation, unlearning",
      "topicZh": "公平性、标注、安全与伦理",
      "short": "S12.01-S12.20",
      "long": "L31-L35",
      "calc": "C39-C43"
    },
    {
      "week": "13",
      "topic": "Review / cross-topic reasoning",
      "topicZh": "复习与跨主题推理",
      "short": "Use all units",
      "long": "L36",
      "calc": "C47"
    },
    {
      "week": "X",
      "topic": "Older-sample CNN/RNN bridge",
      "topicZh": "旧样卷补充：CNN、循环网络与序列模型",
      "short": "SX.01-SX.04",
      "long": "L24, L29",
      "calc": "C17"
    }
  ],
  "sample2025": [
    {
      "questions": "1-4",
      "topic": "Language models, unigram, interpolation, perplexity",
      "topicZh": "语言模型、一元模型、插值与困惑度",
      "links": "S02.01/03/08/11; L03-L05; C01-C04"
    },
    {
      "questions": "5-8",
      "topic": "POS, NER, entity types and challenges",
      "topicZh": "词性、命名实体、实体类型与难点",
      "links": "S03.01/03/09/11; L07; C08"
    },
    {
      "questions": "9-11",
      "topic": "Chunk, constituent, dependency drawing",
      "topicZh": "浅层分块、句法成分与依存树",
      "links": "S04.01/07; L08-L10; C09-C11"
    },
    {
      "questions": "12-14",
      "topic": "ReLU, dropout and XOR",
      "topicZh": "ReLU、dropout 与异或",
      "links": "S05.02/09/11; L12-L13; C12/C16"
    },
    {
      "questions": "15-17",
      "topic": "t-SNE, embeddings and analogy",
      "topicZh": "t-SNE、嵌入与类比",
      "links": "S06.08/09/13; L15-L16; C18-C21"
    },
    {
      "questions": "18-20",
      "topic": "IDF, inverted index and AP/MAP",
      "topicZh": "IDF、倒排索引与 AP/MAP",
      "links": "S07.03/05; S08.03; C22/C23/C28"
    },
    {
      "questions": "21",
      "topic": "Sparse versus dense retrieval",
      "topicZh": "稀疏与稠密检索",
      "links": "S07.09/17; L17-L19"
    },
    {
      "questions": "22-26",
      "topic": "Attention, BERT, adaptation and complexity",
      "topicZh": "注意力、BERT、适配与复杂度",
      "links": "S09.03/04/10/17/21; L23-L25; C32-C35"
    },
    {
      "questions": "27-29",
      "topic": "Harm, alignment, policing, ethics",
      "topicZh": "伤害、对齐、警务反馈与伦理",
      "links": "S09.18; S12.04/05/16; L26/L31/L34"
    }
  ],
  "sample2024": [
    {
      "questions": "1-4",
      "topic": "Language modelling and probabilities",
      "topicZh": "语言建模与概率",
      "links": "S02; L03-L05; C01-C05"
    },
    {
      "questions": "5-9",
      "topic": "Tagging, gazetteers and BIO",
      "topicZh": "标注、实体名录与 BIO",
      "links": "S03; L06-L07; C06-C08"
    },
    {
      "questions": "10-13",
      "topic": "Semantic parsing, treebanks and grammar",
      "topicZh": "语义分析、树库与语法",
      "links": "S04/S11.10; L08-L10/L29; C09-C11"
    },
    {
      "questions": "14-17",
      "topic": "Softmax, backpropagation and gradients",
      "topicZh": "Softmax、反向传播与梯度",
      "links": "S05; L11-L12; C13-C16/C45"
    },
    {
      "questions": "18-20",
      "topic": "Embeddings and dot products",
      "topicZh": "嵌入与点积",
      "links": "S06; L14-L16; C18-C21"
    },
    {
      "questions": "21-26",
      "topic": "Retrieval metrics, TF/IDF, BM25, RAG",
      "topicZh": "检索指标、TF/IDF、BM25 与 RAG",
      "links": "S07-S08; L17-L22; C22-C30"
    },
    {
      "questions": "27-30",
      "topic": "Dropout, CNN and seq2seq",
      "topicZh": "Dropout、CNN 与序列到序列",
      "links": "S05.11/SX; L24/L29; C16-C17"
    },
    {
      "questions": "31-33",
      "topic": "Prompt optimisation, fine-tuning, LLM limitations",
      "topicZh": "提示优化、微调与 LLM 局限",
      "links": "S09.17-21; L23-L27"
    },
    {
      "questions": "34-37",
      "topic": "Responsible NLP, privacy and bias",
      "topicZh": "负责任的 NLP、隐私与偏见",
      "links": "S12; L31-L35; C39-C43"
    }
  ],
  "errata": [
    {
      "title": "Sample identity and timing",
      "text": "The user-supplied file whose name contains 2025 has a 2024 paper header and a 120-minute format. The separate Blackboard 2025 sample and W13 use 180 minutes for 50 marks. Use these materials for revision; the actual exam notice and timetable take precedence.",
      "source": "E24 cover/instructions; E25 instructions; W13 pp.18-24",
      "titleZh": "样卷身份与考试时间",
      "textZh": "你提供的文件名含 2025，但卷面年份是 2024，时长 120 分钟。Blackboard 的另一份 2025 样卷及 W13 使用 50 分、180 分钟。它们用于复习；真实考试通知与时间表优先。"
    },
    {
      "title": "Analogy direction",
      "text": "K25 Q17 computes king-man+woman and answers queen, but the printed question asks king:man::queen:?. For the supplied vectors, man-king+queen equals woman. See C19.",
      "source": "K25 physical p.6, printed p.7; E25 Q17",
      "titleZh": "类比方向",
      "textZh": "K25 Q17 计算 king−man+woman，回答 queen；题干却是 king:man::queen:?。按给定向量，应算 man−king+queen，结果是 woman。参见 C19。"
    },
    {
      "title": "IDF transcription",
      "text": "K25 Q18 lists df(insurance)=20 but substitutes 200 in the worked solution. With N=1000, log10(1000/20)=1.6990, rounded to 1.7, not 0.7. See C23.",
      "source": "K25 physical p.6, printed p.7; E25 Q18",
      "titleZh": "IDF 数字抄写",
      "textZh": "K25 Q18 列出 df(insurance)=20，却在计算时代入 200。N=1000 时，log10(1000/20)=1.6990，约为 1.7，而不是 0.7。参见 C23。"
    },
    {
      "title": "Malformed CFG sentence",
      "text": "The fixed string “The sees the dog” has no complete parse under the supplied grammar, even after lowercasing. The key’s two-tree explanation inserts a noun absent from the input. See C09.",
      "source": "E24 Q13; K24 p.4",
      "titleZh": "缺词的 CFG 句子",
      "textZh": "固定输入 The sees the dog 即使转成小写，在给定语法下也没有完整分析。参考解的两棵树解释插入了原句不存在的名词。参见 C09。"
    },
    {
      "title": "Convolution input channels",
      "text": "E24 Q30 omits the input-channel count. K24 treats every layer as having 3 input channels, which is not a conventional sequential stack whose preceding layer outputs 128 channels. Under RGB input, ordinary sequential layers and biases, C17 gives 446,336 parameters.",
      "source": "E24 Q30; K24 p.7",
      "titleZh": "卷积输入通道",
      "textZh": "E24 Q30 没给输入通道数。K24 把每层都当作 3 输入通道，这不是前层输出 128 通道的普通串联网络。若假设 RGB 输入、普通串联和含偏置，C17 得到 446,336 个参数。"
    },
    {
      "title": "RR and MRR notation",
      "text": "RR uses the first relevant rank only; MRR averages these values over queries. The appendix sum is missing the averaging factor and W08’s shorthand RR sum is ambiguous. Use the explicit definitions in C29.",
      "source": "W08 pp.43-44; sample metric appendices",
      "titleZh": "RR 与 MRR 记号",
      "textZh": "RR 只取首个相关排名的倒数；MRR 在查询之间取平均。附录求和式漏掉了平均因子，W08 的 RR 求和简写也有歧义。使用 C29 的明确公式。"
    },
    {
      "title": "F1 and cosine ranges",
      "text": "Use F1=2PR/(P+R), not 2P²/(P+R). General signed-vector cosine ranges from -1 to 1; the restricted 0-to-1 range applies to non-negative vectors.",
      "source": "W08 p.41; W06 cosine discussion; C18/C27",
      "titleZh": "F1 与余弦范围",
      "textZh": "F1 应为 2PR/(P+R)，不是 2P²/(P+R)。一般带符号向量的余弦范围为 −1 到 1；0 到 1 的限制适用于非负向量。"
    },
    {
      "title": "Probability and count conventions",
      "text": "The old bigram example needs an initial and an end factor for a full boundary-aware sentence probability. TF may mean a raw count or a length-normalised frequency: state the convention rather than assuming both are the same.",
      "source": "E24 Q4/Q24; C01/C23",
      "titleZh": "概率与计数约定",
      "textZh": "旧二元模型例子若要得到包含边界的完整句子概率，还需首词与结束因子。TF 可以指原始计数或按长度归一化频率；应明确约定，不能把两者当成相同量。"
    },
    {
      "title": "Dependency convention",
      "text": "The 2025 key places the auxiliary “was” at the root of its example. A UD-style content-head tree instead typically uses “born” with an auxiliary dependent. Follow any explicit scheme in a question and state your scheme when drawing an alternative.",
      "source": "K25 physical p.4; W04 pp.64-71; C11",
      "titleZh": "依存标注约定",
      "textZh": "2025 参考解把助动词 was 放在例子的根位置。UD 式实义词中心分析通常以 born 为根，was 为助动词依存项。遵守题目明确指定的体系；使用其他体系时应说明。"
    },
    {
      "title": "Backpropagation and optimisers",
      "text": "Backpropagation computes gradients; an optimiser updates parameters. W05 p.98 shows an accumulated-squared-gradient update resembling AdaGrad despite an Adam citation; it is not a complete Adam definition.",
      "source": "W05 pp.80-98; W13 p.10",
      "titleZh": "反向传播与优化器",
      "textZh": "反向传播计算梯度；优化器更新参数。W05 第 98 页虽引用 Adam，但展示的累积梯度平方更新更像 AdaGrad，并不是完整的 Adam 定义。"
    },
    {
      "title": "Attention and fairness qualifications",
      "text": "At fixed model width, more heads do not automatically multiply projection weights. In fairness discussions, incompatibility involves a set of conditions such as predictive parity plus equal FPR and FNR at unequal base rates; calibration alone does not force one particular FPR ordering.",
      "source": "W09 pp.54-55; W12 pp.17-21; Chouldechova 2017; C43/C46",
      "titleZh": "注意力与公平性限定条件",
      "textZh": "总模型宽度固定时，更多头不会自动使投影参数成倍增加。公平性冲突涉及一组联合条件，例如基础率不同下同时要求预测值平等及相同 FPR、FNR；单独校准并不强制某一种 FPR 大小关系。"
    }
  ]
};
