import React from 'react'

export default function Button() {
    return (
        <button
            className="
        btn
        text-dark
        fw-semibold
        px-4
        py-3
        rounded-4
        border
        border-white
        border-opacity-25
        bg-white
        bg-opacity-10
        shadow-lg
      "
            style={{ backdropFilter: "blur(12px)" }}
        >
            Add to cart
            <span className="ms-2">→</span>
        </button>
    )
}
