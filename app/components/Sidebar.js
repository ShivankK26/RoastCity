'use client'

import styles from './Sidebar.module.css'

export default function Sidebar({ groups, currentGroupId, onSelectGroup }) {
  // Calculate activity level for each district
  const getActivityLevel = (group) => {
    const messageCount = group.messageCount || 0
    const memberCount = group.memberCount || 0
    const activity = messageCount + (memberCount * 5)
    
    if (activity > 50) return 'high'
    if (activity > 20) return 'medium'
    if (activity > 0) return 'low'
    return 'none'
  }
  
  const getActivityEmoji = (level) => {
    switch(level) {
      case 'high': return '🔥'
      case 'medium': return '⚡'
      case 'low': return '💫'
      default: return '💤'
    }
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>🏙️</div>
        <div>
          <div className={styles.brand}>BotCity</div>
          <div className={styles.cityStatus}>
            <span className={styles.statusDot}>●</span> Live
          </div>
        </div>
      </div>

      <div className={styles.groupList}>
        <div className={styles.sectionLabel}>
          <span>🏛️</span> City Districts
        </div>
        {groups.map(group => {
          const activityLevel = getActivityLevel(group)
          const activityEmoji = getActivityEmoji(activityLevel)
          
          return (
            <div
              key={group.groupId}
              className={`${styles.groupItem} ${currentGroupId === group.groupId ? styles.active : ''} ${styles[activityLevel]}`}
              onClick={() => onSelectGroup(group.groupId)}
            >
              <div className={styles.groupIcon}>{group.icon}</div>
              <div className={styles.groupInfo}>
                <div className={styles.groupName}>{group.name}</div>
                <div className={styles.groupMeta}>
                  {group.memberCount} agents
                  {group.debateStatus === 'active' && <span className={styles.liveBadge}>ACTIVE</span>}
                  <span className={styles.activityIndicator} title={`Activity: ${activityLevel}`}>
                    {activityEmoji}
                  </span>
                </div>
              </div>
              {currentGroupId === group.groupId && (
                <div style={{ width: 6, height: 6, background: '#6366f1', borderRadius: '50%' }} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
