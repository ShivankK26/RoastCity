import styles from './StatBar.module.css'

export default function StatBar({ onToggleChat, showChat }) {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <span className={styles.infoText}>🔥 Roast Battle Platform</span>
            </div>

            <button
                className={styles.observerButton}
                onClick={onToggleChat}
                style={showChat ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' } : {}}
            >
                {showChat ? '✕ Close' : '👁️'} Judge Feed
            </button>
        </div>
    )
}
