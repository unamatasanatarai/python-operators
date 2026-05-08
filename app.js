/**
 * Python Operators Reference - app.js
 * Core logic for rendering, searching, and interaction.
 */

// 1. Data Integration (Embedded from table.json)
const operators = [
  {
    "symbol": "+",
    "name": "Addition",
    "category": "Arithmetic",
    "description": "Adds two operands",
    "example": "10 + 5",
    "result": "15",
    "notes": ""
  },
  {
    "symbol": "-",
    "name": "Subtraction",
    "category": "Arithmetic",
    "description": "Subtracts second operand from the first",
    "example": "10 - 5",
    "result": "5",
    "notes": ""
  },
  {
    "symbol": "*",
    "name": "Multiplication",
    "category": "Arithmetic",
    "description": "Multiplies two operands",
    "example": "10 * 5",
    "result": "50",
    "notes": ""
  },
  {
    "symbol": "/",
    "name": "Division",
    "category": "Arithmetic",
    "description": "Divides first operand by the second (float)",
    "example": "10 / 3",
    "result": "3.333...",
    "notes": "Always returns a float, even if the result is a whole number."
  },
  {
    "symbol": "%",
    "name": "Modulus",
    "category": "Arithmetic",
    "description": "Returns the division remainder",
    "example": "10 % 3",
    "result": "1",
    "notes": "Useful for checking if a number is even or odd (e.g., x % 2 == 0)."
  },
  {
    "symbol": "**",
    "name": "Exponentiation",
    "category": "Arithmetic",
    "description": "Left operand raised to the power of right",
    "example": "2 ** 3",
    "result": "8",
    "notes": ""
  },
  {
    "symbol": "//",
    "name": "Floor Division",
    "category": "Arithmetic",
    "description": "Divides and returns the integer (rounds down)",
    "example": "10 // 3",
    "result": "3",
    "notes": "Also known as integer division. It truncates the fractional part."
  },
  {
    "symbol": "=",
    "name": "Assignment",
    "category": "Assignment",
    "description": "Assigns value to variable",
    "example": "x = 5",
    "result": "x = 5",
    "notes": ""
  },
  {
    "symbol": "+=",
    "name": "Add and assign",
    "category": "Assignment",
    "description": "Adds and assigns",
    "example": "x += 3",
    "result": "x = x + 3",
    "notes": ""
  },
  {
    "symbol": "-=",
    "name": "Subtract and assign",
    "category": "Assignment",
    "description": "Subtracts and assigns",
    "example": "x -= 3",
    "result": "x = x - 3",
    "notes": ""
  },
  {
    "symbol": "*=",
    "name": "Multiply and assign",
    "category": "Assignment",
    "description": "Multiplies and assigns",
    "example": "x *= 3",
    "result": "x = x * 3",
    "notes": ""
  },
  {
    "symbol": "/=",
    "name": "Divide and assign",
    "category": "Assignment",
    "description": "Divides and assigns",
    "example": "x /= 3",
    "result": "x = x / 3",
    "notes": ""
  },
  {
    "symbol": "%=",
    "name": "Modulus and assign",
    "category": "Assignment",
    "description": "Applies modulus and assigns",
    "example": "x %= 3",
    "result": "x = x % 3",
    "notes": ""
  },
  {
    "symbol": "//=",
    "name": "Floor divide and assign",
    "category": "Assignment",
    "description": "Applies floor division and assigns",
    "example": "x //= 3",
    "result": "x = x // 3",
    "notes": ""
  },
  {
    "symbol": "**=",
    "name": "Exponentiate and assign",
    "category": "Assignment",
    "description": "Applies exponentiation and assigns",
    "example": "x **= 3",
    "result": "x = x ** 3",
    "notes": ""
  },
  {
    "symbol": "&=",
    "name": "Bitwise AND and assign",
    "category": "Assignment",
    "description": "Applies bitwise AND and assigns",
    "example": "x &= 3",
    "result": "x = x & 3",
    "notes": ""
  },
  {
    "symbol": "|=",
    "name": "Bitwise OR and assign",
    "category": "Assignment",
    "description": "Applies bitwise OR and assigns",
    "example": "x |= 3",
    "result": "x = x | 3",
    "notes": ""
  },
  {
    "symbol": "^=",
    "name": "Bitwise XOR and assign",
    "category": "Assignment",
    "description": "Applies bitwise XOR and assigns",
    "example": "x ^= 3",
    "result": "x = x ^ 3",
    "notes": ""
  },
  {
    "symbol": ">>=",
    "name": "Right shift and assign",
    "category": "Assignment",
    "description": "Applies right shift and assigns",
    "example": "x >>= 3",
    "result": "x = x >> 3",
    "notes": ""
  },
  {
    "symbol": "<<=",
    "name": "Left shift and assign",
    "category": "Assignment",
    "description": "Applies left shift and assigns",
    "example": "x <<= 3",
    "result": "x = x << 3",
    "notes": ""
  },
  {
    "symbol": "==",
    "name": "Equal",
    "category": "Comparison",
    "description": "Returns True if values are equal",
    "example": "x == y",
    "result": "Boolean",
    "notes": "Checks if values are equal. Different from 'is'."
  },
  {
    "symbol": "!=",
    "name": "Not equal",
    "category": "Comparison",
    "description": "Returns True if values are not equal",
    "example": "x != y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": ">",
    "name": "Greater than",
    "category": "Comparison",
    "description": "Returns True if left value is greater",
    "example": "x > y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "<",
    "name": "Less than",
    "category": "Comparison",
    "description": "Returns True if left value is smaller",
    "example": "x < y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": ">=",
    "name": "Greater than or equal",
    "category": "Comparison",
    "description": "Returns True if left value is greater or equal",
    "example": "x >= y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "<=",
    "name": "Less than or equal",
    "category": "Comparison",
    "description": "Returns True if left value is smaller or equal",
    "example": "x <= y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "and",
    "name": "AND",
    "category": "Logical",
    "description": "Returns True if both statements are true",
    "example": "x < 5 and x < 10",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "or",
    "name": "OR",
    "category": "Logical",
    "description": "Returns True if one statement is true",
    "example": "x < 5 or x < 4",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "not",
    "name": "NOT",
    "category": "Logical",
    "description": "Reverses the result",
    "example": "not(x < 5 and x < 10)",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "is",
    "name": "Is",
    "category": "Identity",
    "description": "Returns True if both variables are the same object",
    "example": "x is y",
    "result": "Boolean",
    "notes": "Checks object identity, not value equality. Use '==' for values."
  },
  {
    "symbol": "is not",
    "name": "Is not",
    "category": "Identity",
    "description": "Returns True if both variables are not the same object",
    "example": "x is not y",
    "result": "Boolean",
    "notes": ""
  },
  {
    "symbol": "in",
    "name": "In",
    "category": "Membership",
    "description": "Returns True if value is present",
    "example": "'a' in 'apple'",
    "result": "True",
    "notes": ""
  },
  {
    "symbol": "not in",
    "name": "Not in",
    "category": "Membership",
    "description": "Returns True if value is not present",
    "example": "'z' not in 'apple'",
    "result": "True",
    "notes": ""
  },
  {
    "symbol": "&",
    "name": "AND",
    "category": "Bitwise",
    "description": "Sets each bit to 1 if both bits are 1",
    "example": "x & y",
    "result": "0",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": "|",
    "name": "OR",
    "category": "Bitwise",
    "description": "Sets each bit to 1 if one of two bits is 1",
    "example": "x | y",
    "result": "14",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": "^",
    "name": "XOR",
    "category": "Bitwise",
    "description": "Sets each bit to 1 if only one of two bits is 1",
    "example": "x ^ y",
    "result": "14",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": "~",
    "name": "NOT",
    "category": "Bitwise",
    "description": "Inverts all the bits",
    "example": "~x",
    "result": "-11",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": "<<",
    "name": "Left shift",
    "category": "Bitwise",
    "description": "Shift left by pushing zeros in from the right",
    "example": "x << 2",
    "result": "40",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": ">>",
    "name": "Right shift",
    "category": "Bitwise",
    "description": "Shift right by pushing copies of the leftmost bit",
    "example": "x >> 2",
    "result": "2",
    "notes": "Operates on the binary representation of integers."
  },
  {
    "symbol": ":=",
    "name": "Walrus",
    "category": "Walrus",
    "description": "Assigns values within an expression",
    "example": "if (n := len(data)) > 10: print(n)",
    "result": "Assignment expression",
    "notes": "Introduced in Python 3.8. Allows assignment inside an expression."
  }
];

// 2. State Management
let currentFilter = 'all';
let searchQuery = '';

// 3. Selectors
const grid = document.getElementById('operator-grid');
const searchInput = document.getElementById('search-input');
const categoryFilters = document.getElementById('category-filters');
const emptyState = document.getElementById('empty-state');
const randomBtn = document.getElementById('random-btn');
const themeToggle = document.getElementById('theme-toggle');
const clearSearchBtn = document.getElementById('clear-search');

// 4. Core Functions

/**
 * Renders the filtered list of operators
 */
function renderOperators() {
  const filtered = operators.filter(op => {
    const matchesCategory = currentFilter === 'all' || op.category === currentFilter;
    const query = searchQuery.toLowerCase();
    const matchesSearch = op.name.toLowerCase().includes(query) ||
      op.symbol.toLowerCase().includes(query) ||
      op.description.toLowerCase().includes(query) ||
      op.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Update Grid
  grid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    grid.classList.add('hidden');
  } else {
    emptyState.classList.add('hidden');
    grid.classList.remove('hidden');

    filtered.forEach(op => {
      const card = createOperatorCard(op);
      grid.appendChild(card);
    });
  }
}

/**
 * Creates a DOM element for an operator card
 */
function createOperatorCard(op) {
  const article = document.createElement('article');
  article.className = 'operator-card';
  article.id = `op-${op.name.toLowerCase().replace(/\s+/g, '-')}`;

  article.innerHTML = `
        <div class="card-header">
            <span class="symbol">${op.symbol}</span>
            <span class="category-badge">${op.category}</span>
        </div>
        <h3 class="operator-name">${op.name}</h3>
        <p class="description">${op.description}</p>
        <div class="example-box">
            <div class="code-block">
                <button class="copy-btn" title="Copy to clipboard" data-code="${op.example.replace(/"/g, '&quot;')}">
                    <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                </button>
                <code>${op.example}</code>
                <div class="result-line"># Result: ${op.result}</div>
            </div>
            ${op.notes ? `<p class="notes">${op.notes}</p>` : ''}
        </div>
    `;

  // Add Copy logic
  article.querySelector('.copy-btn').addEventListener('click', (e) => {
    const btn = e.currentTarget;
    const code = btn.dataset.code;
    navigator.clipboard.writeText(code).then(() => {
      const originalHtml = btn.innerHTML;
      btn.innerHTML = '<span style="font-size: 10px; font-weight: 700;">COPIED!</span>';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.classList.remove('copied');
      }, 2000);
    });
  });

  return article;
}

/**
 * Dynamically populates category filters
 */
function setupFilters() {
  const categories = ['all', ...new Set(operators.map(op => op.category))];

  categoryFilters.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat === currentFilter ? 'active' : ''}`;
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.category = cat;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = cat;
      renderOperators();
    });

    categoryFilters.appendChild(btn);
  });
}

/**
 * Picks a random operator and highlights it
 */
function pickRandom() {
  const randomIndex = Math.floor(Math.random() * operators.length);
  const op = operators[randomIndex];

  // Reset filters to show all so we can find the random one
  currentFilter = 'all';
  searchQuery = '';
  searchInput.value = '';
  setupFilters();
  renderOperators();

  const cardId = `op-${op.name.toLowerCase().replace(/\s+/g, '-')}`;
  const element = document.getElementById(cardId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element.classList.add('highlight-card');
    setTimeout(() => element.classList.remove('highlight-card'), 2000);
  }
}

/**
 * Theme Management
 */
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const newTheme = isDark ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// 5. Event Listeners

searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  renderOperators();
});

randomBtn.addEventListener('click', pickRandom);
themeToggle.addEventListener('click', toggleTheme);

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  renderOperators();
});

// Keyboard shortcut: '/' to focus search
window.addEventListener('keydown', (e) => {
  if (e.key === '/' && document.activeElement !== searchInput) {
    e.preventDefault();
    searchInput.focus();
  }
});

// 6. Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupFilters();
  renderOperators();
});
