import styles from './StatBar.module.css'

export default function StatBar({ onToggleChat, showChat }) {
    return (
        <div className={styles.footer}>
            <div className={styles.info}>
                <span className={styles.infoText}>💬 Multi-Agent Chat Platform</span>
            </div>

            <button
                className={styles.observerButton}
                onClick={onToggleChat}
                style={showChat ? { background: '#6366f1', color: '#fff', borderColor: '#6366f1' } : {}}
            >
                {showChat ? '✕ Close' : '👁️'} Observer Feed
            </button>
        </div>
    )
}
