import { useState, useEffect } from 'react';
import { messagesAPI } from '../lib/api';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  MessageSquare,
  ArrowDownLeft,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { cn } from '../lib/utils';

export default function MessagesPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await messagesAPI.getAll(100);
      setMessages(response.data);
    } catch (error) {
      console.error('Failed to fetch messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMessageTypeLabel = (type) => {
    switch (type) {
      case 'reminder': return 'Reminder';
      case 'consent_request': return 'Consent Request';
      case 'consent_response': return 'Consent Response';
      case 'follow_up': return 'Follow-up';
      case 'acknowledgment': return 'Acknowledgment';
      default: return 'General';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in" data-testid="messages-page">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight">
          Message History
        </h1>
        <p className="text-muted-foreground mt-1">
          View all WhatsApp messages sent and received by Daisy.
        </p>
      </div>

      {/* Messages List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-pulse text-muted-foreground">Loading messages...</div>
        </div>
      ) : messages.length === 0 ? (
        <Card className="rounded-3xl border-0 shadow-soft">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <MessageSquare className="h-16 w-16 text-muted-foreground/30 mb-4" />
            <h3 className="font-heading text-xl font-medium">No messages yet</h3>
            <p className="text-muted-foreground mt-2 text-center max-w-md">
              Messages will appear here once you start sending reminders via WhatsApp.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <Card 
              key={message.id}
              className={cn(
                "rounded-2xl border-0 shadow-soft transition-all duration-300",
                message.direction === 'outgoing' ? 'ml-8' : 'mr-8'
              )}
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={cn(
                    "p-2 rounded-xl",
                    message.direction === 'outgoing' 
                      ? 'bg-primary/10' 
                      : 'bg-secondary/20'
                  )}>
                    {message.direction === 'outgoing' ? (
                      <ArrowUpRight className="h-4 w-4 text-primary" />
                    ) : (
                      <ArrowDownLeft className="h-4 w-4 text-secondary-foreground" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">
                        {message.direction === 'outgoing' ? 'To: ' : 'From: '}
                        {message.direction === 'outgoing' ? message.to_phone : message.from_phone}
                      </span>
                      <Badge variant="outline" className="text-xs rounded-full">
                        {getMessageTypeLabel(message.message_type)}
                      </Badge>
                    </div>
                    <p className="text-foreground whitespace-pre-wrap">{message.content}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {format(parseISO(message.created_at), 'MMM d, yyyy h:mm a')}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
