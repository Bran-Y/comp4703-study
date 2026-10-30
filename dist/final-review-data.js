/* Add future final-review material here. IDs must remain stable for saved progress. */
(() => {
  const range = (prefix, start, end, width=2) => Array.from({length:end-start+1}, (_,i) => prefix + String(start+i).padStart(width, '0'));
  const groups = [
    {id:'F1', title:'Final 1 · Language models & sequence tagging', titleZh:'Final 1 · 语言模型与序列标注', sources:'Final 1 PDF pp. 8–50; Final 1 bilingual concept review, tables 2–5', ids:[...range('S02.',1,13),...range('S03.',1,11),...range('L',3,7),...range('C',1,8),'C47']},
    {id:'F2', title:'Final 2 · Parsing & neural networks', titleZh:'Final 2 · 句法分析与神经网络', sources:'Final 2 PDF pp. 8–72', ids:[...range('S04.',1,12),...range('S05.',1,13),...range('L',8,13),...range('C',9,16),'C45']},
    {id:'F3', title:'Final 3 · Embeddings & retrieval foundations', titleZh:'Final 3 · 词向量与检索基础', sources:'Final 3 PDF pp. 8–82', ids:[...range('S06.',1,15),...range('S07.',1,8),...range('L',14,18),...range('C',18,25),'C47']},
    {id:'F4', title:'Final 4 · Evaluation, RAG, QA & responsible AI', titleZh:'Final 4 · 评价、RAG、问答与负责任 AI', sources:'Final 4 PDF pp. 8–75', ids:[...range('S07.',8,17),...range('S08.',1,14),...range('S11.',9,15),...range('S12.',1,20),'L19','L20','L21','L22',...range('L',29,36),...range('C',24,31),...range('C',39,44),'C47']},
  ];

  const additions = [];
  function qa(id, type, part, q, qZh, a, aZh, source) {
    additions.push({id,type,weeks:['WFN'],finalParts:[part],q,qZh,a,aZh,source});
  }
  qa('WFN-S01','short','F1','How does a Markov chain differ from a hidden Markov model?', '马尔可夫链与隐马尔可夫模型有什么不同？',
    'A Markov chain specifies transitions between states. An HMM adds observations generated from hidden states; in POS tagging, tags are hidden and words are observed.', '马尔可夫链规定状态之间的转移；HMM 在隐藏状态之外加入由状态产生的观察量。在词性标注中，标签是隐藏状态，单词是观察量。','Final 1 pp. 33–35');
  qa('WFN-S02','short','F1','What is a sequence-labelling task?', '什么是序列标注任务？',
    'It assigns a label to each position in a token sequence, often while modelling relationships among neighbouring labels. POS tagging and BIO-based entity recognition are examples.', '序列标注为 token 序列的每个位置分配标签，并常对相邻标签的关系建模。词性标注和基于 BIO 的实体识别都是例子。','Final 1 p. 29; concept review table 4');
  qa('WFN-S03','short','F1','How do Universal POS tags and Penn Treebank tags differ?', 'Universal POS 标签与 Penn Treebank 标签有什么区别？',
    'Universal POS uses a compact set of broad categories such as NOUN and VERB; Penn Treebank uses finer labels such as NN, NNS and VBD. The tagsets have different conventions and granularity.', 'Universal POS 使用 NOUN、VERB 等较粗的类别；Penn Treebank 使用 NN、NNS、VBD 等更细标签。二者的约定和粒度不同。','Final 1 p. 31; concept review table 4');
  qa('WFN-S04','short','F1','When is an I-X tag valid in the standard BIO scheme?', '标准 BIO 方案中，I-X 标签何时合法？',
    'I-X continues an entity of type X, so it must follow B-X or I-X within the same span. After O or a different type, a new X span should begin with B-X.', 'I-X 用于延续 X 类型实体，因此必须跟在同一实体中的 B-X 或 I-X 后面。若前面是 O 或其他类型，应以 B-X 开始新实体。','Final 1 pp. 47–48; concept review table 4');
  qa('WFN-S05','short','F1','How do generative HMMs and conditional random fields differ?', '生成式 HMM 与条件随机场（CRF）有什么不同？',
    'An HMM models a joint distribution over observations and hidden labels under transition and emission assumptions. A CRF models the conditional distribution of label sequences given the input and can use overlapping input features.', 'HMM 在转移和发射假设下建模观察与隐藏标签的联合分布。CRF 直接建模给定输入时标签序列的条件分布，并可使用重叠的输入特征。','Final 1 p. 49; concept review table 5');
  qa('WFN-S06','short','F1','Why does an unknown word need a defined vocabulary policy?', '为什么未知词需要明确的词表处理规则？',
    'An out-of-vocabulary token has no ordinary entry in a fixed vocabulary. Replacing rare training tokens with UNK allows the model to estimate an unknown-token probability; training and testing must use compatible mappings.', '固定词表没有词表外 token 的普通条目。训练时把低频词映射为 UNK，可估计未知词概率；训练和测试必须使用兼容的映射规则。','Final 1 p. 26; concept review table 2');
  qa('WFN-S07','short','F1','What is the difference between intrinsic and extrinsic language-model evaluation?', '语言模型的内在评价与外在评价有什么不同？',
    'Intrinsic evaluation scores held-out language prediction, often with perplexity. Extrinsic evaluation measures a downstream application such as translation; a perplexity gain need not improve every application.', '内在评价直接衡量保留文本上的语言预测，常用困惑度。外在评价衡量翻译等下游任务；困惑度改善不一定提升所有应用。','Final 1 pp. 14–15; concept review table 2');
  qa('WFN-S08','short','F1','Why must sentence-boundary conventions be stated in perplexity calculations?', '为什么计算困惑度时必须说明句子边界的计分约定？',
    'The exponent uses the number of predicted tokens. Whether an end marker is predicted and counted changes both the probability product and its length; use the convention specified by the question.', '指数中的分母是被预测 token 的数量。是否预测并计入结束标记会同时影响概率乘积与长度；应遵循题目给定的约定。','Final 1 pp. 11, 27');
  qa('WFN-S09','short','F2','What does head percolation do when converting a constituency tree to dependencies?', '把成分树转换为依存树时，头词传播做什么？',
    'A head rule chooses one child as the head of each constituent. The selected lexical head is propagated upward, and the heads of non-head children attach to it, with relations determined by the chosen scheme.', '头规则为每个成分选择一个中心子节点，并将其词汇中心向上传递；非中心子节点的中心词连接到该中心词，关系标签取决于采用的标注体系。','Final 2 pp. 32–35');
  qa('WFN-S10','short','F2','What does the dot in an Earley state represent?', 'Earley 状态中的点表示什么？',
    'Symbols before the dot have been recognised; symbols after it remain expected. The state also records its origin and its location in a chart, which together describe the span processed so far.', '点左侧的符号已经识别，点右侧仍在等待。状态还记录起点及所在 chart 的当前位置，二者共同表示已处理的跨度。','Final 2 pp. 21–26');
  qa('WFN-S11','short','F2','Why must a CKY implementation retain backpointers or multiple analyses?', '为什么 CKY 实现需要保留回溯指针或多个分析？',
    'A chart cell can contain the same nonterminal via different split points or rules. Retaining those alternatives enables reconstruction of multiple valid parse trees; a set of category labels alone cannot recover them all.', '同一 chart 格中的非终结符可能来自不同切分点或规则。保留这些替代项才能重建多棵合法解析树；只保存类别集合无法恢复全部结构。','Final 2 pp. 17–20');
  qa('WFN-S12','short','F2','What is the relationship between an epoch, a mini-batch and an update?', 'epoch、小批量和参数更新之间是什么关系？',
    'An epoch is one pass through the training set. A mini-batch supplies the examples for one gradient estimate and normally one optimiser update; a final smaller batch is included unless the training procedure drops it.', '一个 epoch 是对训练集的一次完整遍历。一个小批量用于一次梯度估计，通常对应一次优化器更新；除非明确丢弃，否则最后不足一个批量的数据也会参与。','Final 2 pp. 62–65');
  qa('WFN-S13','short','F2','Why must a perceptron threshold tie rule be specified?', '为什么必须说明感知机在阈值处的并列规则？',
    'A score exactly equal to the threshold can be assigned to either class depending on whether the rule uses > or ≥. Different tie rules can lead to different predictions and therefore different updates.', '当得分恰好等于阈值时，使用 > 或 ≥ 会让类别判断不同，进而可能产生不同的参数更新。','Final 2 pp. 41–43');
  qa('WFN-S14','short','F2','Why can a stack of purely linear layers not solve XOR?', '为什么堆叠纯线性层仍不能解决 XOR？',
    'Composing linear or affine maps produces another affine map, so the decision boundary remains linear. A nonlinear hidden transformation can make the XOR classes separable in a new representation.', '线性或仿射映射的复合仍是仿射映射，因此决策边界仍是线性的。非线性隐藏变换能在新的表示中使 XOR 类别可分。','Final 2 pp. 43–46');
  qa('WFN-S15','short','F2','How do output activations and losses differ for regression and multiclass classification?', '回归与多分类的输出激活和损失函数有何区别？',
    'A common regression setup uses a linear output with squared-error loss. Single-label multiclass classification commonly uses softmax probabilities with cross-entropy; the right choice depends on the target and modelling assumptions.', '常见回归模型使用线性输出和平方误差；单标签多分类常用 softmax 概率与交叉熵。具体选择仍取决于目标及建模假设。','Final 2 p. 53');
  qa('WFN-S16','short','F2','How can checkpoint averaging differ from early stopping?', '检查点平均与早停有什么不同？',
    'Early stopping chooses when to stop or which checkpoint to keep based on development performance. Checkpoint averaging combines parameters from selected training snapshots; neither method is the same as averaging predictions unless explicitly defined that way.', '早停根据开发集表现选择停止时间或保留的检查点。检查点平均则组合选定训练快照的参数；除非明确定义，否则它不等同于对预测结果求平均。','Final 2 pp. 70–71');
  qa('WFN-S17','short','F3','How do stemming and lemmatisation differ?', '词干提取和词形还原有什么区别？',
    'Stemming applies rules to reduce word forms and may produce a non-word stem. Lemmatisation aims to return a vocabulary lemma, often using lexical or grammatical information; both can help matching but may make errors.', '词干提取用规则缩减词形，结果可能不是实际单词。词形还原试图得到词典词元，通常使用词汇或语法信息；二者都可帮助匹配，也都可能出错。','Final 3 pp. 56–58');
  qa('WFN-S18','short','F3','What does gap encoding store in a sorted posting list?', '对有序倒排列表做差值编码时，存储的是什么？',
    'It stores the first document ID relative to a stated origin and then differences between consecutive IDs. Reconstruct the list by cumulative addition; smaller gaps can be compressed more efficiently.', '它相对于明确的起点存储第一个文档 ID，之后存相邻 ID 的差值。通过累加差值恢复列表；较小差值通常更容易压缩。','Final 3 pp. 53–54');
  qa('WFN-S19','short','F3','Distinguish document frequency from collection term frequency.', '文档频率与集合词频有什么区别？',
    'Document frequency counts documents containing a term, whereas collection term frequency counts the term’s occurrences across all documents. IDF typically uses the former; a collection language model uses token frequency divided by the collection token count.', '文档频率统计包含该词的文档数；集合词频统计该词在全部文档中出现的次数。IDF 通常使用前者；集合语言模型使用后者除以集合 token 总数。','Final 3 pp. 51, 62–74');
  qa('WFN-S20','short','F3','Why can normalisation harm an exact-match query?', '为什么词项归一化可能损害精确匹配查询？',
    'Lowercasing, stemming or lemmatisation can merge distinct forms or erase a meaningful distinction, while insufficient normalisation can miss variants. The best policy depends on the collection and query intent.', '小写化、词干提取或词形还原可能合并本应区分的形式；归一化不足又可能漏掉变体。最佳策略取决于集合和查询意图。','Final 3 pp. 55–58');
  qa('WFN-S21','short','F3','Why must a BM25 answer name its IDF formula?', '为什么计算 BM25 时必须写明所用的 IDF 公式？',
    'BM25 implementations use different logarithm bases and IDF variants, including versions with or without a 1+ term. They can produce different numerical scores, so substitute into the exact formula supplied with the problem.', '不同 BM25 实现使用不同对数底和 IDF 变体，例如是否包含 1+。它们会给出不同数值，因此必须代入题目指定的准确公式。','Final 3 pp. 64–67');
  qa('WFN-S22','short','F3','How is Dirichlet smoothing a mixture of document and collection evidence?', 'Dirichlet 平滑如何混合文档证据与集合证据？',
    'It combines the document term frequency with a collection probability weighted by μ. Its effective weight on the background distribution is μ/(|d|+μ), so short documents or larger μ receive relatively more background influence.', '它将文档词频与按 μ 加权的集合概率相结合。背景分布的有效权重为 μ/(|d|+μ)，因此文档较短或 μ 较大时背景影响相对更强。','Final 3 pp. 71–73; Final 4 overview');
  qa('WFN-S23','short','F3','Why is a rare co-occurrence PMI value potentially unreliable?', '为什么罕见共现事件的 PMI 可能不可靠？',
    'PMI compares observed joint probability with an independence baseline. When counts are tiny, sampling noise can make the ratio very large, so frequency thresholds or other weighting may be needed.', 'PMI 把观察到的联合概率与独立基线比较。计数很小时，抽样噪声可能使比值异常大，因此可能需要频率阈值或其他加权方式。','Final 3 pp. 19–21');
  qa('WFN-S24','short','F4','What is the difference between first-stage recall and reranking quality?', '第一阶段召回与重排质量有什么区别？',
    'Candidate recall asks whether relevant material reaches the reranker at all. Reranking quality asks how well the candidate set is ordered; a reranker cannot rank an item that the first stage discarded.', '候选召回关注相关材料是否进入重排阶段；重排质量关注候选集内部的排序。重排器无法排序第一阶段已经丢弃的文档。','Final 4 pp. 21–27, 33');
  qa('WFN-S25','short','F4','What is distant supervision in a retriever–reader system?', '检索器—阅读器系统中的远程监督是什么？',
    'It uses an indirect signal, such as a known answer string appearing in a retrieved passage, to create training evidence without a human label for every supporting passage. The signal can be noisy because a string match does not prove that a passage answers the question.', '它利用间接信号（如已知答案字符串出现在检索段落中）构造训练证据，而不必由人工标记每个支持段落。该信号可能有噪声，因为字符串匹配不证明段落真的回答了问题。','Final 4 pp. 30, 34–35');
  qa('WFN-S26','short','F4','What does an attention-sum reader do with repeated answer candidates?', '注意力求和阅读器如何处理重复出现的候选答案？',
    'It sums the attention weights at all occurrences of the same candidate, then compares the resulting candidate scores. The method depends on the token or entity grouping specified by the model.', '它将同一个候选答案所有出现位置的注意力权重相加，再比较不同候选的总分。具体行为依赖模型规定的 token 或实体分组。','Final 4 p. 48');
  qa('WFN-S27','short','F4','Why can perfect retrieval recall still be a poor user experience?', '为什么检索召回率达到 100% 仍可能带来差的用户体验？',
    'Returning the whole collection retrieves every relevant item, but precision can be very low and the relevant items may appear too late. Evaluate early ranks and the user’s browsing behaviour as well as recall.', '返回整个集合可以包含所有相关项目，但精确率可能极低，相关结果也可能排得太靠后。除召回率外，还应评价前列排名和用户浏览行为。','Final 4 pp. 10–15, 77–79');
  qa('WFN-S28','short','F4','How do linear gain and exponential gain differ in DCG?', 'DCG 中线性收益与指数收益有什么区别？',
    'Linear gain uses the given relevance grade, while exponential gain may use 2^grade−1 and emphasises higher grades more strongly. Their scores differ; always use the gain and discount specified by the question.', '线性收益直接使用相关等级；指数收益可用 2^等级−1，更强调高相关等级。两者得分不同，应始终使用题目指定的收益和折扣公式。','Final 4 pp. 16–17');
  qa('WFN-S29','short','F4','Why is one fairness metric or one intrinsic embedding test not enough?', '为什么单个公平指标或单项嵌入内在测试不够？',
    'Different metrics capture different harms and may conflict under unequal base rates. An intrinsic association test examines chosen representations, not the entire deployed system, so also evaluate outcomes, utility and group-specific errors.', '不同指标衡量不同伤害，基础率不同时可能存在冲突。嵌入内在关联测试只检查选定表示，不能覆盖完整部署系统，因此还需评价结果、效用和群体错误。','Final 4 pp. 55–63');
  qa('WFN-S30','short','F4','What is the practical limitation of filtering only the user prompt in a RAG assistant?', 'RAG 助手只过滤用户提示的实际局限是什么？',
    'Instructions can also enter through retrieved pages, documents or tool responses. Treat outside content as untrusted, apply appropriate checks to each entry point and restrict tools to the access they actually need.', '指令也可能通过检索网页、文档或工具响应进入。应把外部内容视作不可信数据，对不同入口进行适当检查，并把工具权限限制在实际需要范围内。','Final 4 pp. 66–68');

  qa('WFN-L01','long','F1','Compare n-gram language models with modern neural language models in an examination answer.', '用考试式回答比较 n-gram 和现代神经语言模型。',
    'Both can assign probabilities to next tokens given context. An n-gram estimates from discrete counts over a short fixed history, making it interpretable and cheap but sparse. A neural language model uses learned representations and often a longer context, enabling generalisation but requiring more computation and data. The appropriate choice depends on resources and the task; architecture and context limits differ among neural models.', '两者都可以根据上下文为下一个 token 分配概率。n-gram 根据短而固定的历史使用离散计数，因此可解释、成本低，但容易稀疏。神经语言模型利用学习得到的表示，通常能使用更长上下文，从而更好泛化，但需要更多计算和数据。选择取决于资源与任务；不同神经模型的结构和上下文限制也不同。','Final 1 pp. 12–13; concept review table 3');
  qa('WFN-L02','long','F1','Explain why BIO tagging, HMM decoding and an entity dictionary solve different parts of NER.', '解释 BIO 标注、HMM 解码和实体词典分别解决 NER 的哪些问题。',
    'BIO represents boundaries and entity types as token labels. An HMM supplies a probabilistic sequence model and Viterbi finds its best label path under its assumptions. A gazetteer lists known names and can provide matching features, but it cannot by itself resolve all unseen names or contextual ambiguity. These components can complement one another, and evaluation should check both span boundaries and types.', 'BIO 把实体边界和类型表示为逐 token 标签。HMM 提供概率序列模型，Viterbi 在其假设下寻找最佳标签路径。实体词典列出已知名称，可提供匹配特征，但无法单独解决所有未见名称或上下文歧义。这些组件可以互补；评价时应同时检查跨度边界和类型。','Final 1 pp. 45–50; concept review tables 4–5');
  qa('WFN-L03','long','F2','Compare CKY and Earley parsing, including their grammar assumptions and chart states.', '比较 CKY 与 Earley 句法分析，包括语法要求和 chart 状态。',
    'CKY is a bottom-up dynamic-programming algorithm usually presented with Chomsky normal form and a chart indexed by spans. Earley uses dotted-rule states with origins and prediction, scanning and completion, and can work with general CFGs. Both reuse partial analyses and can represent ambiguity, but require backpointers or equivalent information to recover trees. Grammar and implementation details determine practical performance.', 'CKY 是自底向上的动态规划算法，通常要求乔姆斯基范式，并以跨度索引 chart。Earley 使用带起点的带点规则状态，通过预测、扫描和完成操作处理一般 CFG。二者都复用部分分析并可表示歧义，但需要回溯指针或同等信息来恢复树。实际性能还取决于语法和实现细节。','Final 2 pp. 17–28');
  qa('WFN-L04','long','F2','Explain how a constituency analysis can support dependency relations and information extraction.', '解释成分句法如何支持依存关系和信息抽取。',
    'A constituency tree groups words into phrases, and head rules choose a lexical head for each phrase. Head percolation can turn phrase structure into head–dependent relations, which help identify grammatical arguments. Relation extraction must still map those arguments to semantic roles and handle passive voice or lexical variants. The precise tree and labels depend on the annotation convention.', '成分树把词组织成短语，头规则为每个短语选择词汇中心。头词传播可将短语结构转化为中心词—依存词关系，帮助识别语法论元。关系抽取仍需把论元映射到语义角色，并处理被动语态或词汇变化。具体树结构与标签取决于标注约定。','Final 2 pp. 30–37');
  qa('WFN-L05','long','F3','Explain an inverted-index retrieval pipeline from text normalisation to ranked candidates.', '从文本归一化到排序候选，解释倒排索引检索流程。',
    'Documents are tokenised and optionally normalised, with the preprocessing choices recorded. An inverted index maps each term to document IDs and may retain frequencies and positions; sorted postings can be compressed using gaps. A query retrieves and combines relevant lists, after which a scoring function such as BM25 ranks candidates. Normalisation and compression improve efficiency, but matching and ranking choices should be evaluated on held-out queries.', '文档先分词，并按需要进行归一化，同时记录预处理选择。倒排索引把词项映射到文档 ID，也可保存词频和位置；有序列表可用差值压缩。查询时读取并组合相关列表，再用 BM25 等评分函数排序候选。归一化和压缩可以提升效率，但匹配与排序策略仍需用留出查询评价。','Final 3 pp. 47–67, 80–81');
  qa('WFN-L06','long','F3','Compare BM25 with Dirichlet-smoothed query likelihood.', '比较 BM25 与 Dirichlet 平滑的查询似然。',
    'BM25 combines rarity, saturating within-document term frequency and document-length normalisation in a ranking function. Query likelihood instead ranks by how probable the query is under each document language model. Dirichlet smoothing blends document counts with collection probabilities, preventing unseen document terms from receiving zero probability. Their exact formulas and logarithm conventions must be stated, and effectiveness should be compared on the same judged queries.', 'BM25 在排序函数中结合词项稀有度、饱和的文档内词频和文档长度归一化。查询似然则按各文档语言模型生成查询的概率排序。Dirichlet 平滑混合文档计数与集合概率，避免文档中未见词得到零概率。必须说明准确公式及对数约定，并在相同已标注查询上比较效果。','Final 3 pp. 64–82; Final 4 p. 7');
  qa('WFN-L07','long','F4','Explain how to diagnose a RAG failure when the answer is wrong.', '当 RAG 答案错误时，应如何诊断失败原因？',
    'Inspect the specific query and check whether the collection contains sufficient evidence, whether retrieval found it and whether reranking or truncation preserved it. Then compare the evidence with the generated answer to see whether the model ignored, misinterpreted or contradicted it. Supplying known evidence or swapping one component can help isolate causes if reported as a diagnostic intervention. Aggregate scores alone cannot identify which step failed.', '先检查具体问题，确认集合中是否存在充分证据、检索是否找到证据，以及重排或截断是否保留。再比较证据与生成答案，判断模型是否忽略、误解或违背证据。提供已知证据或交换单一组件有助于定位原因，但应明确报告为诊断性干预。仅靠总体平均分无法确定哪个步骤失败。','Final 4 pp. 28–36');
  qa('WFN-L08','long','F4','Compare AP, RR and nDCG for different information needs.', '针对不同信息需求比较 AP、RR 和 nDCG。',
    'AP rewards relevant documents appearing early across a ranking and is suitable when multiple relevant items matter. RR considers only the first relevant result and fits an information need satisfied by one hit; MRR averages RR over queries. nDCG discounts lower ranks and can use graded gains, making it useful when relevance levels differ. Binary nDCG is also mathematically valid, but the chosen gain and metric should be justified for the labels and user task.', 'AP 根据多个相关文档的排名位置评价排序，适合多个相关结果都有价值的需求。RR 只关注首个相关结果，适合找到一个即可满足的信息需求；MRR 对多个查询的 RR 取平均。nDCG 对较低排名折扣，并可使用分级收益，适合相关程度不同的情况。二值 nDCG 在数学上也有效，但收益和指标应根据标签与用户任务说明理由。','Final 4 pp. 13–19');

  function calc(id, part, topic, topicZh, q, qZh, formula, formulaZh, steps, stepsZh, result, resultZh, practice, practiceZh, key, keyZh, tipEn, zh, source) {
    additions.push({id,type:'calc',weeks:['WFN'],finalParts:[part],topic,topicZh,q,qZh,formula,formulaZh,steps,stepsZh,result,resultZh,practice,practiceZh,key,keyZh,tipEn,zh,source,level:'Core practice'});
  }
  calc('WFN-C01','F1','Bigram estimation with sentence boundaries','含句子边界的二元概率估计',
    'A corpus contains three sentences: <s> a b </s>, <s> a c </s>, <s> b a </s>. Estimate P(a|<s>) and P(b|a), then score <s> a b </s> with bigram MLE.', '语料有三句话：<s> a b </s>、<s> a c </s>、<s> b a </s>。用二元 MLE 求 P(a|<s>)、P(b|a)，再求 <s> a b </s> 的概率。',
    'P(v|u)=C(u,v)/C(u); P(sentence)=product of boundary-aware transitions.', '条件概率=二元计数/前词计数；句子概率为包含首尾边界转移的条件概率乘积。',
    ['The start marker occurs 3 times, and twice is followed by a: P(a|<s>)=2/3.', 'a occurs 3 times, followed once each by b, c and </s>: P(b|a)=1/3.', 'b occurs twice and is followed by </s> once: P(</s>|b)=1/2. The sentence probability is (2/3)(1/3)(1/2)=1/9.'],
    ['句首标记出现 3 次，其中 2 次后接 a，所以 P(a|<s>)=2/3。','a 共出现 3 次，后面分别接 b、c 和 </s> 各一次，所以 P(b|a)=1/3。','b 共出现 2 次，其中 1 次后接 </s>，故 P(</s>|b)=1/2。句子概率=(2/3)(1/3)(1/2)=1/9。'],
    'P(a|<s>)=2/3, P(b|a)=1/3, sentence probability=1/9.', 'P(a|<s>)=2/3，P(b|a)=1/3，句子概率=1/9。',
    'What is P(c|a) in this corpus?', '这个语料中的 P(c|a) 是多少？','1/3.','1/3。',
    'Count the full history consistently, including a as the last word in the third sentence.','分母应统计所有 a，包括第三句话末尾的 a。','Final 1 pp. 10–11');
  calc('WFN-C02','F1','HMM parameter estimation','HMM 参数估计',
    'In eight tagged sentences, five start with D. Among ten transitions leaving N, seven go to V and one to N. The tag N appears ten times and emits fish twice. Estimate π(D), P(V|N), P(N|N) and P(fish|N).', '8 个标注句中有 5 个以 D 开始。10 次从 N 出发的转移中，7 次到 V、1 次到 N。N 共出现 10 次，其中 2 次发射 fish。估计 π(D)、P(V|N)、P(N|N) 和 P(fish|N)。',
    'π(j)=number of sentences starting with j / number of sentences; transition and emission MLEs are conditional relative frequencies.', '初始概率为以该标签开头的句子比例；转移与发射的 MLE 使用对应条件下的相对频率。',
    ['π(D)=5/8.', 'P(V|N)=7/10 and P(N|N)=1/10.', 'P(fish|N)=2/10=1/5. The remaining N transitions need not be specified to answer these quantities.'],
    ['π(D)=5/8。','P(V|N)=7/10，P(N|N)=1/10。','P(fish|N)=2/10=1/5。要回答这些量，不必知道 N 的其余转移分别是什么。'],
    'π(D)=0.625; transitions 0.7 and 0.1; emission 0.2.', 'π(D)=0.625；两个转移概率为 0.7 和 0.1；发射概率为 0.2。',
    'If three of the eight sentences start with N, estimate π(N).', '若 8 句话中有 3 句以 N 开始，π(N) 是多少？','3/8.','3/8。',
    'Initial, transition and emission probabilities have different denominators.','初始、转移与发射概率的分母不同。','Final 1 pp. 35–39');
  calc('WFN-C03','F2','Mini-batches and layer parameters','小批量与层参数量',
    'A training set contains 10 examples, batch size is 4 and the final smaller batch is kept. How many updates occur in two epochs? Count parameters including biases in a 10→4→2 dense network.', '训练集有 10 个样本，批大小 4，保留最后不足一批的数据。两个 epoch 有多少次更新？计算含偏置的 10→4→2 全连接网络参数量。',
    'Updates per epoch=ceil(N/batch size) when the final batch is kept; dense layer parameters=input×output+output biases.', '保留最后小批量时，每个 epoch 更新次数=ceil(N/批大小)；全连接层参数=输入数×输出数+输出偏置数。',
    ['Each epoch has batches of size 4, 4 and 2: ceil(10/4)=3 updates.', 'Two epochs give 2×3=6 updates.', 'The first layer has 10×4+4=44 parameters, and the second 4×2+2=10, for 54 total.'],
    ['每个 epoch 的批大小为 4、4、2，因此 ceil(10/4)=3 次更新。','两个 epoch 共 2×3=6 次更新。','第一层 10×4+4=44，第二层 4×2+2=10，总计 54。'],
    'Six updates; 54 parameters.', '6 次更新；54 个参数。',
    'If the last small batch is dropped, how many updates per epoch?', '若丢弃最后不足一批的数据，每个 epoch 更新多少次？','2.','2 次。',
    'Do not round down unless drop-last is specified; bias parameters must be counted when requested.','题目没有要求 drop-last 时不要向下取整；要求含偏置时必须计数。','Final 2 pp. 62–65');
  calc('WFN-C04','F2','Head percolation on a small tree','小句法树的头词传播',
    'Use S→NP VP (head VP), NP→Det N (head N), VP→V NP (head V) for “the dog chased the cat”. Give the root and head-to-dependent arcs.', '句子 the dog chased the cat 使用 S→NP VP（中心 VP）、NP→Det N（中心 N）、VP→V NP（中心 V）。给出根词及中心词→依存词弧。',
    'Propagate each constituent’s designated child head upward; connect non-head child heads to their parent’s head.', '按头规则将中心子节点的词向上传递；将非中心子节点的头词连接到其父成分的头词。',
    ['The two NP heads are dog and cat; each determiner attaches to its noun.', 'The VP head is chased; cat attaches to chased.', 'The S head is chased; dog attaches to chased. Arcs: chased→dog, dog→the, chased→cat, cat→the.'],
    ['两个 NP 的头词分别为 dog 和 cat；各限定词依存于对应名词。','VP 的头词为 chased；cat 依存于 chased。','S 的头词为 chased；dog 依存于 chased。弧为 chased→dog、dog→the、chased→cat、cat→the。'],
    'Root: chased; four token-to-token arcs.', '根词 chased；共有 4 条 token 间依存弧。',
    'How many token-to-token arcs does a dependency tree over seven words have?', '7 个词的依存树有多少条 token 间弧？','6, excluding a separate ROOT link.','6 条，不含单独的 ROOT 连接。',
    'Use the head and direction conventions stated in the question; relation labels may vary by scheme.','按题设的头规则和箭头方向作答；关系标签可随标注体系变化。','Final 2 pp. 32–35');
  calc('WFN-C05','F3','Posting-list gap encoding','倒排列表差值编码',
    'Using 0 as the origin, gap-encode the sorted document IDs [3,10,14,30], then reconstruct the list.', '以 0 为起点，对有序文档 ID [3,10,14,30] 做差值编码，再还原列表。',
    'gap1=id1−origin; gap_i=id_i−id_(i−1). Reconstruct by cumulative addition.', '第一个差值=首个 ID−起点，后续差值=当前 ID−前一个 ID；累加差值可还原列表。',
    ['The first gap is 3−0=3.', 'The later gaps are 10−3=7, 14−10=4 and 30−14=16.', 'Cumulative sums 3, 3+7, 10+4 and 14+16 reconstruct [3,10,14,30].'],
    ['首个差值=3−0=3。','后续差值为 10−3=7、14−10=4、30−14=16。','依次累加得到 3、10、14、30，还原原列表。'],
    'Gaps: [3,7,4,16].', '差值为 [3,7,4,16]。',
    'With origin 0, decode gaps [2,5,1].', '起点为 0 时，还原差值 [2,5,1]。','[2,7,8].','[2,7,8]。',
    'State the first-ID convention; gap encoding assumes the posting IDs are sorted.','说明首个 ID 的起点约定；差值编码要求倒排列表有序。','Final 3 pp. 53–54');
  calc('WFN-C06','F3','BM25 with positive log IDF','使用正值对数 IDF 的 BM25',
    'For one query term use N=100, df=10, f=2, |d|=avgdl, k1=1 and b=0.5. Compute BM25 with IDF=ln(1+(N−df+0.5)/(df+0.5)); query factor is 1.', '单个查询词 N=100、df=10、f=2、|d|=avgdl、k1=1、b=0.5。用 IDF=ln(1+(N−df+0.5)/(df+0.5)) 计算 BM25；查询因子为 1。',
    'score=IDF×[(k1+1)f/(f+k1(1−b+b|d|/avgdl))].', 'BM25 得分=题设 IDF×饱和词频项；长度比为 1 时，长度归一化括号等于 1。',
    ['IDF=ln(1+90.5/10.5)=ln(101/10.5)≈2.263745.', 'The TF factor is (2×2)/(2+1)=4/3.', 'The score is approximately 2.263745×4/3=3.018327.'],
    ['IDF=ln(1+90.5/10.5)=ln(101/10.5)≈2.263745。','词频因子=(2×2)/(2+1)=4/3。','得分约为 2.263745×4/3=3.018327。'],
    'BM25≈3.018327 under this exact IDF convention.', '按此 IDF 约定，BM25≈3.018327。',
    'What is the length-normalisation bracket when |d|=avgdl?', '当 |d|=avgdl 时，长度归一化括号是多少？','1.','1。',
    'Do not substitute a different IDF variant or logarithm base without saying so.','不能不说明就换用其他 IDF 变体或对数底。','Final 3 pp. 64–67');
  calc('WFN-C07','F4','nDCG with linear gain','线性收益的 nDCG',
    'A ranking has graded relevance [2,0,1]. Compute nDCG@3 using gain=grade and discount log2(rank+1).', '排名的分级相关性为 [2,0,1]。使用收益=等级、折扣=log2(排名+1)，计算 nDCG@3。',
    'DCG=Σ grade_i/log2(i+1); nDCG=DCG/ideal DCG.', 'DCG 为各位置等级除以对应折扣后的和；nDCG=实际 DCG/理想 DCG。',
    ['Actual DCG=2/log2(2)+0/log2(3)+1/log2(4)=2.5.', 'The ideal ranking is [2,1,0], giving IDCG=2+1/log2(3)≈2.630930.', 'nDCG=2.5/2.630930≈0.950234.'],
    ['实际 DCG=2/log2(2)+0/log2(3)+1/log2(4)=2.5。','理想排序为 [2,1,0]，IDCG=2+1/log2(3)≈2.630930。','nDCG=2.5/2.630930≈0.950234。'],
    'nDCG@3≈0.950234 with linear gain.', '线性收益下 nDCG@3≈0.950234。',
    'What is nDCG when the observed ranking equals the ideal and IDCG>0?', '当实际排名等于理想排名且 IDCG>0 时，nDCG 是多少？','1.','1。',
    'Linear gain is different from 2^grade−1; follow the stated formula and state the IDCG-zero convention if needed.','线性收益与 2^等级−1 不同；遵循题设公式，并在必要时说明 IDCG=0 的约定。','Final 4 pp. 16–17');
  calc('WFN-C08','F4','Attention-sum answer selection','注意力求和答案选择',
    'An answer candidate A occurs twice with attention weights 0.15 and 0.30; candidate B occurs once with weight 0.40. Compute their attention-sum scores and select the higher one.', '候选答案 A 出现两次，注意力权重为 0.15、0.30；B 出现一次，权重为 0.40。求各自注意力总分并选择较高者。',
    'score(candidate)=sum of attention weights at its occurrences.', '候选得分=该候选所有出现位置的注意力权重之和。',
    ['A receives 0.15+0.30=0.45.', 'B receives 0.40.', 'Since 0.45>0.40, A has the higher score.'],
    ['A 的得分为 0.15+0.30=0.45。','B 的得分为 0.40。','因为 0.45>0.40，A 的得分更高。'],
    'A wins with score 0.45.', 'A 胜出，得分 0.45。',
    'If B occurs at two positions with weights 0.20 and 0.28, what is B’s score?', '若 B 在两处出现，权重为 0.20 和 0.28，B 的得分是多少？','0.48.','0.48。',
    'Sum occurrences of the same candidate; do not simply keep its largest single attention weight.','同一候选的不同出现位置要相加，不能只保留单个最大权重。','Final 4 p. 48');

  window.FINAL_REVIEW = {version:'2026-10-30-f1-f4',groups,additions};
})();
